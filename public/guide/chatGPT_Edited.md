# Jammming Guides #

## Section 1: Create a React Application ##

1. **Setting Up Your Project Structure**

   To begin building your website, follow these steps to set up the directory structure and add necessary CSS presets:

   - Create a new directory named "Jammming" for your React application.
   - In the `public` folder, place the `reset.css` file to reset default styles.
   - Add the Google Fonts "Poppins" and "Work Sans" by linking them in the `index.html` file.
   - Replace the existing favicon with an updated one.

2. **Creating a Boilerplate React App**

   Create a new React application by running the following command in your project directory:

   ```bash
   npx create-react-app .
   ```

3. **Updating the Title**

   In the `public/index.html` file, update the `<title>` value to "Jammming".

4. **Removing Unused Files**

   Remove the following files from the `src` folder, as they won't be used in this project:

   - `App.test.js`
   - `logo.svg`

5. **Organizing Components**

   Create a directory named `Components` within the `src` directory. Inside this directory, you'll organize your components.

## Section 2: Create Static Components ##

6. **Creating App Component**

   Create a new directory called `App` inside the `Components` directory. Move the `App.js` and `App.css` files to this new directory. Update the path in `index.js` to reflect this change.

7. **Creating SearchBar Component**

   - Create a directory called `SearchBar` inside the `Components` directory.
   - Inside `SearchBar`, add `SearchBar.js` and `SearchBar.css` files.
   - In `SearchBar.js`, create a component named `SearchBar` with a `render` method that returns the necessary HTML structure.

8. **Creating SearchResults Component**

   Follow similar steps to create the `SearchResults` and `Playlist` components.

9. **Creating Playlist Component**

   Continue creating the `Playlist`, `TrackList`, and `Track` components following the provided guidelines.

## Section 3: Pass Down Search Result and Render Result List ##

10. **Passing Down Search Results**

    - In `App.js`, create a constructor function and set an initial value for `this.state.searchResults`.
    - Pass the `searchResults` state from `App` to `SearchResults` component.

11. **Rendering Search Results**

    - Inside `SearchResults`, use the `map()` method to render each track in the `tracks` property.

## Section 4: Pass Down Playlist to TrackList ##

12. **Passing Down Playlist**

    - In `App.js`, add default values for `playlistName` and `playlistTracks` in the state.
    - Pass `playlistName` and `playlistTracks` from `App` to `Playlist` component.

13. **Rendering Playlist**

    - Inside `Playlist`, use the `map()` method to render each track in the `playlistTracks` property.

## Section 5: Add Tracks to a Playlist ##

14. **Implementing Adding Tracks**

    - In `App.js`, create a method called `addTrack()` that adds a track to the playlist.
    - Pass `addTrack()` through components to enable adding tracks to the playlist.

## Section 6: Remove Tracks from a Playlist ##

15. **Implementing Removing Tracks**

    - In `App.js`, create a method called `removeTrack()` to remove tracks from the playlist.
    - Pass `removeTrack()` through components to enable removing tracks from the playlist.

## Section 7: Change the Name of a Playlist ##

16. **Implementing Changing Playlist Name**

    - In `App.js`, create a method called `updatePlaylistName()` to update the playlist name.
    - Pass `updatePlaylistName()` to allow changing the playlist name.

## Section 8: Create a Method that Saves the Playlist to a User's Account ##

17. **Implementing Saving Playlist**

    - In `App.js`, create a method called `savePlaylist()` to save the playlist to the user's Spotify account.
    - Pass `savePlaylist()` through components to allow saving the playlist.

## Section 9: Hook up Search Bar to Spotify Search ##

18. **Implementing Spotify Search**

    - In `Spotify.js`, create a method called `getAccessToken()` to retrieve the user's access token.
    - Create a method called `search()` in `Spotify.js` that queries the Spotify API for search results.

19. **Using Search in App**

    - In `App.js`, use the `Spotify.search()` method to update the `searchResults` state.

## Section 10: Spotify Access Token ##

20. **Retrieving Spotify Access Token**

    - Complete the `getAccessToken()` method in `Spotify.js` to retrieve the access token using the implicit grant flow.

## Section 11: Implement Spotify Search Request ##

21. **Implementing Spotify Search Request**

    - Complete the `search()` method in `Spotify.js` to make a request to the Spotify API for search results.

## Section 12: Save a User's Playlist ##

22. **Implementing Saving User's Playlist**

    - In `Spotify.js`, create a method called `savePlaylist()` to save the user's playlist to their Spotify account.

## Section 13: Deploy (Optional) ##

23. **Deploying the App**

    - Install `surge` globally using `npm install --global surge`.
    - Create a domain name for your app in the format `SOME_NAME.surge.sh`.
    - Update the `redirectURI` in `Spotify.js` and in your Spotify application settings.
    - Build your app using `npm run build`.
    - Run `surge` in the `build` directory and follow the steps to deploy your app.

Congratulations! You've successfully built and deployed your Jammming app.
