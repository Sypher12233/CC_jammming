let accessToken = "";
const clientID = "bff84ea4a997437997b3006fa74d3a8c";
const redirectUrl = "http://127.0.0.1:3000";
// const redirectUrl = "https://syphersjammmingproject.surge.sh";

function generateRandomString(length = 128) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
  let str = '';
  for (let i = 0; i < length; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return str;
}

async function sha256(plain) {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const base64 = btoa(String.fromCharCode(...hashArray));
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

const Spotify = {
  async getAccessToken() {
    accessToken = localStorage.getItem("access_token");
    // 70. First, check if accessToken is already set. If yes, return it immediately.
    if (accessToken) return accessToken;

    // 71. Use URLSearchParams to check if the browser URL contains a valid authorization code. Also check for any error response.
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const error = urlParams.get("error");

    // 74. If error is found in the URL (e.g., user denied access), log it and return an empty string.
    if (error) {
      console.error("Error during authentication:", error);
      return;
    }

    // 72. If code is present, retrieve the stored code_verifier from localStorage. Then make a POST request to Spotify’s /api/token endpoint to exchange the code and verifier for an access token.
    if (code) {
      const retreivedCodeVerifier = localStorage.getItem("code_verifier");
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code: code,
          redirect_uri: redirectUrl,
          client_id: clientID,
          code_verifier: retreivedCodeVerifier,
        })
      });

      const jsonResponse = await response.json();
      accessToken = jsonResponse.access_token;
      localStorage.setItem("access_token", accessToken);
      const expiresIn = jsonResponse.expires_in;

      // 73. Set a timer to clear the access token when it expires, then clean up the URL to remove the query string.
      window.setTimeout(() => {
        accessToken = "";
        localStorage.removeItem("access_token");
      }, expiresIn * 1000);
      window.history.pushState({}, null, "/");
      return accessToken;
    }

    // 75. If no token or code is present, begin the PKCE login process.
    // First, generate a secure codeVerifier and a hashed codeChallenge.
    const codeVerifier = generateRandomString(128);
    const codeChallenge = await sha256(codeVerifier);
    localStorage.setItem("code_verifier", codeVerifier);

    // 76. Construct the Spotify authorization URL using the code_challenge_method=S256 and the generated codeChallenge.
    const redirect =
      `https://accounts.spotify.com/authorize?` +
      `client_id=${clientID}` +
      `&response_type=code` +
      `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
      `&scope=playlist-modify-public` +
      `&code_challenge_method=S256` +
      `&code_challenge=${codeChallenge}`;

    // 77. Redirect the user to Spotify’s authorization page.
    window.location = redirect;
  },

  async search(term) {
    accessToken = await Spotify.getAccessToken();
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
    const aToken = await Spotify.getAccessToken();
    const header = { Authorization: `Bearer ${aToken}` };
    let userId;
    return fetch(`https://api.spotify.com/v1/me`, { headers: header })
      .then((response) => response.json())
      .then((jsonResponse) => {
        userId = jsonResponse.id;
        let playlistId;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          headers: header,
          method: "post",
          body: JSON.stringify({ name: name }),
        })
          .then((response) => response.json())
          .then((jsonResponse) => {
            playlistId = jsonResponse.id;
            return fetch(
              `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
              {
                headers: header,
                method: "post",
                body: JSON.stringify({ uris: trackUris }),
              }
            );
          });
      });
  },
};

export { Spotify };
