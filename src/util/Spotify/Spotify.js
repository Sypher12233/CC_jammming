// test.js code
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
    const expiry = localStorage.getItem("token_expiry");
    console.log("Checking token expiry:", expiry);
    console.log(expiry && Date.now() < Number(expiry));
    // First, check if accessToken is already set and return it.
    if (expiry && Date.now() < Number(expiry)) {
      // token is still valid
      return accessToken;
    } else {
      // token is not valid, remove it from localStorage
      localStorage.removeItem("access_token");
      localStorage.removeItem("token_expiry");
      accessToken = "";
    }


    // Use URLSearchParams to check if the browser URL contains a valid authorization code. Also check for any error response.
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const error = urlParams.get("error");

    // If error is found in the URL (e.g., user denied access), log it and return an empty string.
    if (error) {
      console.error("Error during authentication:", error);
      return;
    }

    // If code is present, retrieve the stored code_verifier from localStorage. Then make a POST request to Spotify’s /api/token endpoint to exchange the code and verifier for an access token.
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
      console.log("Access token in code:", accessToken);
      localStorage.setItem("access_token", accessToken);

      // Store the token expiry time in localStorage.
      const expiresIn = jsonResponse.expires_in;
      const now = new Date();
      const expiry = new Date(now.getTime() + (expiresIn * 1000));
      localStorage.setItem('token_expiry', expiry);
      console.log("Token expiry in code:", localStorage.getItem("token_expiry"));

      window.history.pushState({}, null, "/");
      return accessToken;
    }

    // If no token or code is present, begin the PKCE login process.
    // First, generate a secure codeVerifier and a hashed codeChallenge.
    const codeVerifier = generateRandomString(128);
    console.log("Generated codeVerifier in code:", codeVerifier);
    const codeChallenge = await sha256(codeVerifier);
    localStorage.setItem("code_verifier", codeVerifier);
    console.log("Generated codeVerifier in localStorage:", localStorage.getItem("code_verifier"));

    // Construct the Spotify authorization URL using the code_challenge_method=S256 and the generated codeChallenge.
    const redirect =
      `https://accounts.spotify.com/authorize?` +
      `client_id=${clientID}` +
      `&response_type=code` +
      `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
      `&scope=playlist-modify-public` +
      `&code_challenge_method=S256` +
      `&code_challenge=${codeChallenge}`;

    // Redirect the user to Spotify’s authorization page.
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
