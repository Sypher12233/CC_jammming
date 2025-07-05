let accessToken = "";
const clientID = "bff84ea4a997437997b3006fa74d3a8c";
const redirectUrl = "http://127.0.0.1:3000";

const scope = 'user-read-private user-read-email';
const authUrl = new URL("https://accounts.spotify.com/authorize")
const tokenEndpoint = "https://accounts.spotify.com/api/token";

// PKCE: Generate Code Verifier
const generateRandomString = (length) => {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const values = window.crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], "");
};
// a hashed version of codeVerifier will get sent with the authorization code to get the access token
const codeVerifier = generateRandomString(64);
localStorage.setItem("code_verifier", codeVerifier);

// this function generates a code challenge from the code verifier
const sha256 = async (plain) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return await window.crypto.subtle.digest("SHA-256", data);
};

const base64encode = (input) => {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
};


const Spotify = {
  getAuthCode() {
    if (accessToken) return accessToken;

    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      return Spotify.getToken(code).then(tokenResponse => {
        accessToken = tokenResponse.access_token;
        window.setTimeout(() => accessToken = "", tokenResponse.expires_in * 1000);
        window.history.pushState({}, document.title, "/");
        return accessToken;
      });
    }

    const authURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=code&redirect_uri=${redirectUrl}&scope=playlist-modify-public&code_challenge_method=S256&code_challenge=${codeChallenge}`;
    window.location = authURL;
  },


  async getToken(code) {
    if (accessToken) return accessToken;

    const urlParams = new URLSearchParams(window.location.search);
    code = urlParams.get("code");

    let codeChallenge = "";
    if (code) {
      // Generate code challenge from verifier
      // codeChallenge is a hashed version of codeVerifier (SHA-256 + base64).
      (async () => {
        const hashed = await sha256(codeVerifier);
        codeChallenge = base64encode(hashed);
      })();

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
    }

    const code_verifier = localStorage.getItem("code_verifier");
    const response = await fetch(tokenEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: clientID,
        grant_type: "authorization_code",
        code: code,
        redirect_uri: redirectUrl,
        code_verifier: code_verifier
      }),
    });
    console.log('token returned');
    return await response.json();
  },

  async search(term) {
    const token = await Spotify.getToken();
    console.log('token returned' + JSON.stringify(token));
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(json => {
        if (!json.tracks) return [];
        return json.tracks.items.map(t => ({
          id: t.id,
          name: t.name,
          artist: t.artists[0].name,
          album: t.album.name,
          uri: t.uri,
        }));
      });
  },

  async savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) return;
    const token = await Spotify.getAccessToken();
    const header = { Authorization: `Bearer ${token}` };

    const userResponse = await fetch(`https://api.spotify.com/v1/me`, { headers: header });
    const userId = (await userResponse.json()).id;

    const playlistResponse = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
      method: "POST",
      headers: {
        ...header,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name }),
    });

    const playlistId = (await playlistResponse.json()).id;

    return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      method: "POST",
      headers: {
        ...header,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ uris: trackUris }),
    });
  },
};

export { Spotify };
