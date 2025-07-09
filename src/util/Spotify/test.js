let accessToken = "";
const clientID = "bff84ea4a997437997b3006fa74d3a8c";
const redirectUrl = "http://127.0.0.1:3000";
// const redirectUrl = "https://syphersjammmingproject.surge.sh";
const scope = 'playlist-modify-public';
const authUrl = new URL("https://accounts.spotify.com/authorize");

const generateRandomString = (length) => {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const values = crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}

const codeVerifier = generateRandomString(64);

const sha256 = (plain) => {
  const encoder = new TextEncoder()
  const data = encoder.encode(plain)
  return window.crypto.subtle.digest('SHA-256', data)
}

const base64encode = (input) => {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}



const Spotify = {
  async getAccessToken() {
    if (accessToken) return accessToken;

    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get('code');

    if (code) {
      // stored in the previous step
      const codeVerifier = localStorage.getItem('code_verifier');

      const url = "https://accounts.spotify.com/api/token";
      const payload = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          client_id: clientID,
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: redirectUrl,
          code_verifier: codeVerifier,
        }),
      }

      const body = await fetch(url, payload);
      const response = await body.json();

      return response.access_token;

    }

    // generated in the previous step
    window.localStorage.setItem('code_verifier', codeVerifier);
    const hashed = await sha256(codeVerifier)
    const codeChallenge = base64encode(hashed);

    const params = {
      response_type: 'code',
      client_id: clientID,
      scope,
      code_challenge_method: 'S256',
      code_challenge: codeChallenge,
      redirect_uri: redirectUrl,
    }

    authUrl.search = new URLSearchParams(params).toString();
    window.location.href = authUrl.toString();
  },

  async search(term) {
    accessToken = await this.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (!jsonResponse) {
          console.error("Response error");
        }
        return jsonResponse.tracks.items.map((t) => ({
          id: t.id,
          name: t.name,
          artist: t.artists[0].name,
          album: t.album.name,
          uri: t.uri,
        }));
      });
  },

  async savePlaylist(name, trackUris) {
    if (!name || !trackUris) return;
    const aToken = await this.getAccessToken();
    const header = { Authorization: `Bearer ${aToken}`, "Content-Type": "application/json" };
    let userId;
    return fetch(`https://api.spotify.com/v1/me`, { headers: header })
      .then((response) => response.json())
      .then((jsonResponse) => {
        userId = jsonResponse.id;
        let playlistId;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          headers: header,
          method: "POST",
          body: JSON.stringify({ name: name }),
        })
          .then((response) => response.json())
          .then((jsonResponse) => {
            playlistId = jsonResponse.id;
            return fetch(
              `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
              {
                headers: header,
                method: "POST",
                body: JSON.stringify({ uris: trackUris }),
              }
            );
          });
      });
  },
};

export { Spotify };
