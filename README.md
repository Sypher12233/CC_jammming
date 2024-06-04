# Jammming Guides #

## A CHATGPT edited version of of this readme file is available [here](./public/guide/chatGPT_Edited.md) ##

> Section 1: Set Up Your Local Environment

1. By the end of this first section, you will be ready to start building your website. This section walks you through the process of setting up the directory structure and adding CSS presets.

    To achieve this, you will create a boilerplate react app, remove unused files, and add reset.css, Google font links, and an updated favicon.

    * Google fonts - [Poppins](https://fonts.google.com/specimen/Poppins?query=poppins) and [Work Sans](https://fonts.google.com/specimen/Work+Sans?query=work)
    * Updated [favicon](https://jammingyoutube.surge.sh/favicon.ico)

2. Create a new React application in a directory called Jammming.
3. In `index.html`, update the `<title>` value to Jammming.
4. Remove **App.test.js** and **logo.svg** from the src/ folder, as you will not use them in this project.
5. Add [reset.css](./public/reset.css) to the public/ directory and link to it in `index.html`.
6. Link to the following Google fonts in `index.html`:

    * Poppins

7. Update favicon.ico with [this image](https://jammingyoutube.surge.sh/favicon.ico).

    > Section 2: Create Static Components

8. In this section, you will create a JavaScript file and a CSS file for each of six components in the Jammming app. In the steps below, we will link to the raw HTML templates and CSS to help you write the JSX for each component.
In the HTML, we use comments to indicate where the JSX for one component renders another component.
The HTML and CSS for each of the six components are listed below:

    * App - [HTML](./src/template/App.txt) and [CSS](./src/Components/App/App.module.css)
    * SearchBar - [HTML](./src/template/SearchBar.txt) and [CSS](./src/Components/SearchBar/SearchBar.module.css)
    * SearchResults - [HTML](./src/template/SearchResults.txt) and [CSS](./src/Components/SearchResults/SearchResults.module.css)
    * Playlist - [HTML](./src/template/Playlist.txt) and [CSS](./src/Components/Playlist/Playlist.module.css)
    * TrackList - [HTML](./src/template/Tracklist.txt) and [CSS](./src/Components/Tracklist/Tracklist.module.css)
    * Track - [HTML](./src/template/Track.txt) and [CSS](./src/Components/Track/Track.module.css)

    We'll walk through each implementing each component from the templates provided in future steps.

9. Create a src/Components directory to hold the components.
10. Create a directory called App/ in the Components/ directory.

    Move `App.js` and `App.module.css` to the App/ folder and update the path in `index.js` accordingly.

    Additionally add [this background image](https://jammingyoutube.surge.sh/static/media/background_photo_desktop.a0687f3fe6f1303a2d18.jpg) to the directory as well - it is used by the CSS file.

11. Inside of the `App.js` `.render()` method, add a return statement with JSX that renders [this HTML](./src/template/App.txt).
    Follow the guidelines below when you write the HTML (linked above) as JSX:

    * Change all class attributes to **className**.
    * Do not change the class values, as we will use them in a later step to add style.

12. Use the comments in the HTML document from the last step to determine the components you need to import into `App.js`.

    > Note, you will create a folder for each component. The JavaScript file and CSS files for each component will live in the component's folder. The folder, JavaScript file, and CSS file will all have the same name.

13. Add [this CSS](./src/Components/App/App.module.css) to the `App.module.css` file.

    Import **App.module.css** into `App.js`.

14. Create a SearchBar/ directory in the Components/ directory.

    Inside of SearchBar/, add `SearchBar.js` and `SearchBar.module.css`.

15. Inside of `SearchBar.js` create a component called SearchBar with a `render` method that returns [this HTML](./src/template/SearchBar.txt).

    Follow the guidelines below when you write the HTML (linked above) as JSX:

    * Change all class attributes to className.
    * Do not change the class values, as we will use them in a later step to add style

    Use the comments in the HTML document to determine if you need to import any components.

    Export the SearchBar component.

16. Add [this CSS](./src/Components/SearchBar/SearchBar.module.css) to the SearchBar.module.css file.

    Import **SearchBar.module.css** into `SearchBar.js`.

17. Create a SearchResults/ directory in the Components/
18. Inside of SearchResults/, add `SearchResults.js` and `SearchResults.module.css`.

    Inside of `SearchResults.js` create a component called SearchResults with a `render` method that returns [this HTML](./src/template/SearchResults.txt).

    Follow the guidelines below when you write the HTML (linked above) as JSX:

    * Change all class attributes to className.
    * Do not change the class values, as we will use them in a later step to add style

    Use the comments in the HTML document to determine if you need to import any components.

    Export the SearchResults component.

    Add [this CSS](./src/Components/SearchResults/SearchResults.module.css) to the SearchResults.css file.

19. import **SearchResults.module.css** into `SearchResults`.

20. Create a Playlist/ directory in the Components/ directory.

    Inside of Playlist/, add `Playlists` and `Playlist.module.css`.

21. Inside of Playlist.js create a component called `Playlist` with a `.render()` method that returns [this HTML](./src/template/Playlist.txt)

    Follow the guidelines below when you write the HTML linked above as JSX:

    * Change all class attributes to className
    * Do not change the class values, as we will use them in a later step to add style.
    * Change the value property to defaultValue and set it equal to ('New Playlist")
    * If you wank, comment out `<Tracklist />` since it doesn't work without any props.

    Use the comments in the HTML document to determine if you need to import any components.

    Export the Playlist component

22. Add [this C5S](./src/Components/Playlist/Playlist.module.css) to the `Playlist.module.css` file.

    Import **Playlist.module.css** into `Playlist.js`.

23. Create a TrackList/ directory in the Components/ directory, inside of TrackList./, add `TrackList.js` and `TrackList.module.css`.

24. Inside of `TrackList.js` create a component called `Tracklist` with a `render()` method that returns [this HTML](./src/template/Tracklist.txt).

    Follow the guidelines below when you write the HTML linked above as JSX:

    * Change all class attributes to className
    * Do not modify the class values, as we will use them in a later step to add style.

    For now, you will hard code three tracks. In a later assessment, we will replace the hard-coded values with tracks from Spotify.

    Use the comments in the HTML document to determine if you need to import any components.

    Export the TrackList component

25. Add [this CSS](./src/Components/Tracklist/Tracklist.module.css) to the Tracklist.module.css file.

    Import **TrackList.css** into `TrackList.js`

26. Create a Track/ directory in the Components/ directory.

    Inside of Track/, add `Track.js` and `Track.module.css`

27. Inside of `Track.js` create a component called `Track` with a `.render()` method that returns [this HTML](./src/template/Track.txt)

    Follow the guidelines below when you write the HTML linked above as JSX.

    * Change all class attributes to className.
    * Do not change the class values, as we will use them in a later step to add style.
    * Create a method called `renderAction` that displays a buttons element with `-` as its content if the `isRemoval` property is true, and a  `+` `<button>` element if the `isRemoval` property is false. Set the class name to Track-action.

    Use the comments in the HTML document to determine if you need to import any components.

    Export the Track component.

28. Add [this CSS](./src/Components/Track/Track.module.css) to the Track.module.css file.

    Import **Track.module.css** into `Track.js`

    > Section 3: Pass Down Search Result and Render Result List

29. In this section, you will pass the state of a search results parameter through a series of components to render an array of tracks.

    When a user requests data from Spotify, the JSON response will contain a set of song tracks. Your Jammming web app should display the song **name**, **artist**, and **album** for *each* track in the results list.

    Implement this by creating a unidirectional data flow from your root component. The root component should pass down the search results to a child component that will return each individual track to be rendered.

    Since the Spotify API is not currently set up to be called, you may hard-code an array of track objects to be passed down for now.

    In a later section you will build a `method` that sets the state of the search results parameter to a response from the Spotify API.

30. Import `useState` function from **react library** at the top of your **App.js** file.

    `useState` will allow you to manage and store state.

31. Inside of the App component, set a hard-coded initial value for your `searchResults` state (it will be an array containing track objects).

32. Pass the state of the App component's **searchResults** to the **SearchResults** component as `userSearchResults`.

33. Pass `userSearchResults` from the **SearchResults** component to the **Tracklist** component.

34. In the **Tracklist** component, use the `map()` method to render *each* **Track** in the `userSearchResults` property.

    Set the **track** attribute to `{track}` and the **key** attribute to `track.id`.

35. Render the track `name`, `artist`, and `album` inside the **Track** component.

    > Section 4: Pass down Playlist to TrackList

36. In this section, you will pass the state of a user's custom playlist title and tracks from the App component down to components that render them.

    When a user adds songs from the search results list to their playlist, a method will update the state of a playlist parameter in Apps. and Jammming will render the song in the user's playlist.

    In a later assessment. you will write methods that add and remove songs from the playlist. You will also write a method that updates the playlist's title.

37. Add hard-coded values for **playlistName** and **playlistTracks** to state in `App.js`.

38. Pass the `playlistName` and `playlistTracks` states from the **App** component to the **Playlist** component.

39. Pass the `playlistTracks` *props* from the **Playlist** component to the **Tracklist** component.

    > Section 5: Add Tracks to a Playlist

40. In the App component create a *method* called `addTrack()` with the following functionality:

    * Accepts a `track` argument
    * Use the `track`'s `id` property to check if the current song is in the **playlistTracks** state.
    * If the `id` is *new*, add the song to the end of the playlist.
    * Set the new state of the playlist

41. Pass `addTrack()` to the **SearchResults** component as an `onAdd` attribute.

42. Pass `isRemoval` with a value of `false` and `onAdd` from the **SearchResults** component to the **Tracklist** component.

43. Pass `onAdd` and `isRemoval` from the **Tracklist** component to the **Track** component.

44. Create a `passTrack()` method in the **Track** component.

    Use it to pass the `props.track` to the playlist.

45. In the `Track.js` `+` element add an `onClick` property with the value set to the `passTrack` method.

    > Section 6: Remove Tracks from a Playlist

46. In this section, you will implement a process that removes a song from a user's custom playlist when the user selects the `-` sign inside of a rendered track.

47. In App js create a method called `removeTrack` with the following functionality.

    * Accepts a `track` argument
    * Uses the `track`'s `id` property to filter it out of `playlistTracks` state
    * Sets the new state of the playlist

48. Pass `removeTrack()` to the **Playlist** component as an `onRemove` attribute.

49. Pass `onRemove` from the **Playlist** component to the **Tracklist** component.

    Pass `isRemoval` with a value of `true` down to **Tracklist**.

50. Pass `onRemove` and `isRemoval` from the **Tracklist** component to the **Track** component.

51. Create a `passTrackToRemove()` method in the Track component

    Use it to remove `props.track` from the playlist.

52. In the `Track.js` `-` element, add an `onClick` property with the value set to the `passTrackToRemove` method.

    > Section 7: Change the Name of a Playlist

53. In this section, you will implement code that allows a learner to change the name of their playlist, and save the updated value to the App component's state.

54. In **App.js** create a method called update `updatePlaylistName` with the following functionality:

    * Accepts a `name` argument
    * Sets the state of the `playlistName` to the input argument

55. Pass `updatePlaylistName` to the **Playlist** component as an attribute named `onNameChange`

56. In the **Playlist** component, create a method called `handleNameChange`

    The method should accept an event that is triggered by an `onChange` attribute in the `Playlist` component's `<input>` element.

    Inside the method, call `onNameChange()` with the event target's value (from the `<input>` element).

57. In the Playlist render method's `<input>` element, pass `handleNameChange()` to an `onChange` property,

    > Section 8: Create a Method that Saves the Playlist to a User's Account

58. In this section. you will create a method that will save a user's playlist to their Spotify account and resets the state of the playlist name and tracks array.

    To accomplish the goal of this assessment, you will need to access a track property named `uri`.

    **Spotify** uses this field to reference tracks in the Spotify library. You will create an *array* containing the `uri` of *each* track in the `playlistTracks` property.

    In a later section, you will pass the `playlistName` and the array of `uri`s to a Spotify-linked method that writes the tracks in `playlistTracks` to a **user**'s account.

59. In `App.js` create a method called `savePlaylist` with the following functionality:

    * Generates an array of `uri` values called `trackURIs` from the `playlistTracks` property.
    * In a later step. you wil pass the `trackURIs` array and `playlistName` to a method that will save the user's playlist to their account.

60. Pass `savePlaylist` to the `Playlist` component as an attribute called `onSave`

61. In the **Playlist.js** `SAVE TO SPOTIFY` button element, add an `onClick` property with the value set to `props.onSave`.

    > Section 9: Hook up Search Bar to Spotify Search

62. In this section, you will create a method that updates the `searchResults` parameter in the **App** component with a user's search results.

    You will write the logic that allows a user to enter a search parameter, receives a *response* from the Spotify API and *updates* the `searchResults` state with the results from a Spotify *request*.

    In a later section, you will hook the `search()` method up to the *Spotify API*.

63. In **App.js** create a method called `search` with the following functionality:

    * Accepts a `search` term
    * Logs the term to the **console**

64. Pass `search` to the **SearchBar** component as an `onSearch` attribute.

    In SearchBar component, create a new state named `term`

65. In **SearchBar.js**, create a method called `passTerm` that passes the `term` *state* to `props.onSearch`.

66. In **SearchBar.js** create a method called `handleTermChange` with the following functionality.

    * Accepts an `event` argument
    * Sets the state of the **searchBar**'s term to the **event target**'s value

67. In the `SearchBar.js`'s `<input>` element, add an `onChange` attribute and set it equal to `handleTermChange`.

68. And in `<button>` element, add an `onClick` attribute and set it equal to `passTerm`.

    > Section 10: Spotify Access Token

69. In the next few sections. you will write three methods that accomplish the following

    * Get a Spotify users *access token*
    * Send a search request to the Spotty API
    * Save a user's playlist to their Spotify account.

    Before you begin. you will need to create an empty JavaScript module called `Spotify` located in **src/util/Spotify/Spotify.js**.

    In this assessment, you wil register a Spotify application and create a method called `getAccessToken` in the Spotify module. The method will get a user's access token so that they can make requests to the Spotify API.

    Use the Spotify [Applications Registration Flow](https://developer.spotify.com/documentation/web-api/concepts/apps) and [Spotify Authentication guide](https://developer.spotify.com/documentation/web-api/concepts/authorization) to help you write the method.

70. Create a directory named `Spotify` at **src/util** and add a file called `Spotify.js`

71. In **Spotify.js** create a **Spotify** module as an empty object. At the bottom of **Spotify.js** export `Spotify`

72. Above the empty object, declare an empty variable that will hold the user's access token.

73. Inside the `Spotify` module, create a method called `getAccessToken`.

    Check if the user's access token is already set, if it is, return the value saved to the access Token

74. If the access token is not already set, check the URL to see if it has just been obtained.

    Since we will be using the [implicit Grant Flow](https://developer.spotify.com/documentation/web-api/tutorials/implicit-flow) to setup a user's account, and make requests.

    **The implicit grant flow returns a user's access token in the URL.**

    Use the following code to parse the URL and set values for your access token and expiration time.

    ```javascript
    // extract access token from URL
        window.location.href.match(/access_token=([^&]*)/);

    // extract expiry time from URL
        window.location.href.match(/expires_in=([^&]*)/);
    ```

75. If the access token and expiration time are in the URL, implement the following steps:

    * Set the access token value
    * Set a variable for expiration time
    * Set the access token to expire at the value for expiration time
    * Clear the parameters from the URL, so the app doesn't try grabbing the access token after it has expired
    * Return the access token

76. The last case is that if the access token variable is empty and is not in the URL.

    Before you write this conditional code block, you need to register your application using the Spotify [application registration flow](https://developer.spotify.com/documentation/web-api/concepts/apps).

    Give your application a relevant **name** and **description**. Also, add the following Redirect URI:

    ```url
    http://localhost:3000
    ```

77. At the top of `Spotify.js` create *constant variables* for your application's `client ID` and `redirect URI`.

    Set the `client ID` variable to the value provided on your application page.

    Set the `redirect URI` to `http://locolhost:3000`

78. Back in your conditional statement, redirect users to the following URL:

    ```url
    https://accounts.spotify.com/authorize?client_id=CLIENT_ID&response_type=token&scope=playlist-modify-public&redirect_uri=REDIRECT_URI
    ```

    Interpolate your `client ID` and `redirect URI` variables In place of `CLIENT_ID` and `REDIRECT_URI`.

    > Section 11. Implement Spotify Search Request

79. In this section, you will create a method in Spotify is that accepts a search term input, passes the search term value to a Spotify request, then returns the response as a list of tracks in JSON format.

    You will need the user's access token to make requests to the Spotify API. You will use the request parameters in step four of the implicit grant flow to make requests. In the following steps, we wil use `fetch` to make our requests, but any method will work.

    You should use the `/vi/search?type=track` endpoint when making your request.

    Use the Spotify Web [API Endpoint Reference](https://developer.spotify.com/documentation/web-api/reference/search) to help format your request.

80. In the Spotify object, add a method called `search` that accepts a parameter for the user' search term.

    `search()` returns a promise that will eventually resolve to the list of tracks from the search.

81. Inside `search()`, start the promise chain by returning a `GET` request (using `fetch()`) to the following Spotify endpoint:

    ```url
    https://api.spotify.com/v1/search?type=track&q=TERM
    ```

    Replace the value of TERM with the value saved to the search term argument.

    Add an `Authorization` header to the request containing the access token.

82. Convert the returned response to **JSON**.

    If the JSON does not contain any tracks, return an empty array or log an error to the console.

    Then, *map* the converted JSON to an array of tracks.

    The *mapped array* should contain a list of **track** objects with the following properties:

    * ID - returned as track.id
    * Name - returned as track.name
    * Artist - returned as track.artists[0].name
    * Album = returned as track.album.name
    * URI - returned as track.uri

83. In `App.js` import Spotify and update the `search()` method with the `Spotify.search()` method.

    Update the state of `searchResults` with the value resolved from `Spotify.search()`'s promise.

    > Section 12: Save a User's Playlist

84. In this section, you will create a method called `savePlaylist` that writes the learner's custom playlist in Jammming to their Spotify account.

    The `savePlaylist` method accepts a playlist name and an array of track URIs. It makes the fellowing three requests to the Spotify API:

    * GET current user's ID
    * POST a new playlist with the input name to the current user's Spotify account. Receive the playlist ID back from the request.
    * POST the track URIs to the newly-created playlist, referencing the current user's account ID and the new playlist (ID)

    You will update the `savePlaylist()` method in `App.js` to use the new `Spotify.savePlaylist()` method

85. Create a method in `Spotify.js` that accepts two arguments. The first argument is the name of the playlist. The second is an array of track URIs.

    Inside the function, check if there are values saved to the methods two arguments. If not, return.

86. Create three default variables:

    * An access token variable, set to the current user's access token
    * A headers variable, set to an object with an **Authorization** parameter containing the user's access token in the implicit grant flow request format
    * An empty variable for the user's Id

87. Find an endpoint from [this link](https://developer.spotify.com/documentation/web-api/reference/) that enables you to make a request that returns the user's Spotify username

    * Convert the response to **JSON** and assign the **jsonResponse**'s `id` parameter to the `userId` variable.
    * Create a new variable that will hold the `playlistId` from the next request

88. Use the returned `userId` to make a **POST** request that creates a *new* playlist in the user's account and returns a playlist ID

    * Use the [Spotify playlist endpoints](https://developer.spotify.com/documentation/web-api/reference/) to find a request that creates a new playlist.
    * Set the playlist `name` attribute in the request body, to the `name` value passed into the method.
    * Convert the response to **JSON** and save the response id parameter to the variable called `playlistId`.

89. Now using the returned `playlistId` make another **POST** request that *adds* the custom playlist to the user's account

    * Use the [Spotify playlist endpoints](https://developer.spotify.com/documentation/web-api/reference/) to find a request that *POST*s the playlist to their account.
    * Set the `uris` attribute in the request body, to the `trackUris` value passed into the method.

90. In `App.js` update the `savePlaylist()` method to call `Spotify.savePlaylist()`.

    After you call `Spotify.savePlaylist()`, reset the state of `playlistName` to `"New Playlist"` and `playlistTracks` to an empty array.

    > Section 13: Deploy (Optional)

91. In this section, you will use surge to deploy your Jammming project.

    You will start by installing surge globally.

    In your console, run

    ```zsh
    npm install --global surge
    ```

92. BEFORE YOU PROCEED, you need to think of a domain name with the following format:

    ```text
    SOME_NAME.surge.sh
    ```

    `SOME_NAME` can be replaced with anything you like

    Next, you need to replace or add this URI to **two** locations in your project (make sure to add the `https://` before your domain name in both locations)

    FOR EXAMPLE

    ```TEXT
    https://SOME_NAME.surge.sh
    ```

    * In **Spotify.js** set `redirectURI` to your new domain
    * In your Spotify application, add your new domain as a redirect URI

93. Back in the command line. from the Jammming project's root directory, run

    ```zsh
    npm run build
    ```

94. cd into the build directory and run the command

    ```zsh
    § surge
    ```

    Follow the steps on the screen. Change the domain value to your new URI.

    Congrats! You've just deployed a React App that queries the Spotify
