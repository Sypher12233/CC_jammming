let accessToken = "";
let expiresAt = 0;

const clientID = "";
const redirectUrl = "http://127.0.0.1:3000"; // Replace with your deployed URL if needed

// ─────────────────────────────
// PKCE Helper Functions
// ─────────────────────────────
function generateCodeVerifier(length = 128) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
  let verifier = '';
  for (let i = 0; i < length; i++) {
    verifier += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return verifier;
}

async function generateCodeChallenge(codeVerifier) {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

// ─────────────────────────────
// Spotify Object
// ─────────────────────────────
const Spotify = {
  async getAccessToken() {
    if (accessToken) return accessToken;

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    // ─── Handle redirect from Spotify ───
    if (code) {
      const codeVerifier = localStorage.getItem("code_verifier");

      const body = new URLSearchParams({
        grant_type: "authorization_code",
        code: code,
        redirect_uri: redirectUrl,
        client_id: clientID,
        code_verifier: codeVerifier,
      });

      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      });

      const data = await response.json();

      if (data.access_token) {
        accessToken = data.access_token;
        expiresAt = Date.now() + data.expires_in * 1000;

        window.history.replaceState({}, document.title, "/"); // Clean URL
        return accessToken;
      } else {
        console.error("Token exchange failed", data);
        return null;
      }
    }

    // ─── Start Authorization ───
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = await generateCodeChallenge(codeVerifier);
    localStorage.setItem("code_verifier", codeVerifier);

    const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientID}&scope=playlist-modify-public&redirect_uri=${encodeURIComponent(
      redirectUrl
    )}&code_challenge_method=S256&code_challenge=${codeChallenge}`;

    window.location = authUrl;
  },

  async search(term) {
    const token = await Spotify.getAccessToken();
    if (!token) {
      console.error("No access token available.");
      return [];
    }

    return fetch(`https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(term)}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (!jsonResponse.tracks) {
          console.error("No tracks found", jsonResponse);
          return [];
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
    if (!name || !trackUris.length) return;

    const token = await Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${token}` };
    let userId;

    return fetch("https://api.spotify.com/v1/me", { headers })
      .then((response) => response.json())
      .then((jsonResponse) => {
        userId = jsonResponse.id;

        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          method: "POST",
          headers: {
            ...headers,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name }),
        });
      })
      .then((response) => response.json())
      .then((jsonResponse) => {
        const playlistId = jsonResponse.id;

        return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
          method: "POST",
          headers: {
            ...headers,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ uris: trackUris }),
        });
      });
  },
};

export { Spotify };
