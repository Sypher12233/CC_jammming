# Jammming Guides #

## A CHATGPT edited version of of this readme file is available [here](public/guide/chatGPT_Edited.md) ##

> Section 1: Create a React Application

1. By the end of this first section, you will be ready to start building your website. This section walks you through the process of setting up the directory structure and adding CSS presets.
To achieve this, you will create a boilerplate react app, remove unused files, and add reset.css, Google font links, and an updated favicon.
• Google fonts - Poppins and Work Sans
• Updated favicon
2. Create a new React application in a directory called Jammming.
3. In index.html, update the «title> value to Jammming.
4. Remove App.test.js and logo.svg from the src/ folder, as you will not use them in this project.
5. Add [reset.css](./public/reset.css) to the public/ directory and link to it in index.html.
6. Link to the following Google fonts in index.html:
• Poppins
7. Update favicon.ico with this image.

> Section 2: Create Static Components

8. In this section, you will create a JavaScript file and a CSS file for each of six components in the Jammming app. In the steps below, we will link to the raw HTML templates and CSS to help you write the JSX for each component.
In the HTML, we use comments to indicate where the JSX for one component renders another component.
The HTML and CSS for each of the six components are listed below:

* App - [HTML](./src/template/App.txt) and [CSS](./src/App/App.module.css)
* SearchBar - [HTML](./src/template/SearchBar.txt) and [CSS](./src/SearchBar/SearchBar.module.css)
* SearchResults - [HTML](./src/template/SearchResults.txt) and [CSS](./src/SearchResults/SearchResults.module.css)
* Playlist - [HTML](./src/template/Playlist.txt) and [CSS](./src/Playlist/Playlist.module.css)
* TrackList - [HTML](./src/template/Tracklist.txt) and [CSS](./src/Tracklist/Tracklist.module.css)
* Track - [HTML](./src/template/Track.txt) and [CSS](./src/Track/Track.module.css)

We'll walk through each implementing each component from the templates provided in future steps.

9. Create a src/Components directory to hold the components.
10. Create a directory called App/ in the Components/ directory.
Move App.js and App.css to the App/ folder and update the path in index.js accordingly.
Additionally add this background image to the directory as well - it is used by the CSS file.
11. Inside of the App.js .render() method, add a return statement with JSX that renders this HTML.
Follow the guidelines below when you write the HTML (linked above) as JSX:

* Change all class attributes to **className**.
* Do not change the class values, as we will use them in a later step to add style.

12. Use the comments in the HTML document from the last step to determine the components you need to import into App.js.
Note, you will create a folder for each component. The JavaScript file and CSS files for each component will live in the component's folder. The folder, JavaScript file, and CSS file will all have the same name.
13. Add this CSS to the App.css file.
Import App.css into App.js.
14. Create a SearchBar/ directory in the Components/ directory.
Inside of SearchBar/, add SearchBar.js and SearchBar.css.
15. Inside of SearchBar.is create a component called SearchBar with a render method that returns this HTML.
Follow the guidelines below when you write the HTML (linked above) as JSX:
• Change all class attributes to className.
• Do not change the class values, as we will use them in a later
step to add style
Use the comments in the HTML document to determine if you need to import any components.
Export the SearchBar component.
16. Add this CSS to the SearchBar.css file.
Import SearchBar.css into SearchBar.js.
17. Create a SearchResults/ directory in the Components/
19. Add this CSS to the SearchResults.css file.
import SearchResults.ca into SearchResults.
20. Create a Playlist./ directory in the Components/ directory.
Inside of Playlist/, add Playlists and Playlist.css.
21. Inside of Playlist.]s create a component called Playlist with a `render()` method that returns this HIM
Follow the guidelines below when you write the HTML linked above as JSX:
• Change all class attributes to className
• Do not change the class values, as we will use them in a later step to add style.
• Change the value property to defaultValue and set it equal to ('New Playlist")
• If you wank, comment out `<Tracklist />` since it doesn't work without any props.
Use the comments in the HTML document to determine if you need to import any components.
Export the Playlist component
22. Add this C5S to the Playlist.cas file.
Import Playlist.cas into Playlist.js.
23. Create a TrackList/ directory in the Components/ directory, inside of TrackList./, add TrackList.js and TrackList.css.
34. Inside of TrackList.js create a component called Tracklist with a `render()` method that returns this HTML.
Follow the guidelines below when you write the HTML linked above as JSX:
• Change all class attributes to className
• Do not modify the class values, as we will use them in a later step to add style.
• For now, you will hard code three tracks. In a later assessment, we will replace the hard-coded values with tracks from Spotify.
Use the comments in the HTML document to determine if you need to import any components.
Export the TrackList component
25. Add this CSS to the Tracklist.css file.
Import TrackList.css into TrackList.js
26. Create a Track/ directory in the Components/ directory.
Inside of Track/, add Track.js and Track.css
27. Inside of Track.js create a component called Track with a `render()` method that returns this HTML
Follow the guidelines below when you write the HTML linked above as JSX.
• Change all class attributes to className.
• Do not change the class values, as we will use them in a later step to add style.
• Create a method called renderAction that displays a buttons element with `-` as its content if the `isRemoval` property is true, and a  `+` `<button>` element if the `isRemoval` property is false. Set the class name to Track-action.
Use the comments in the HTML document to determine if you need to import any components.
Export the Track component.

> Section 3: Pass Down Search Result and Render Result List

29. In this section, you will pass the state of a search results parameter through a series of components to render an array of tracks.
When a user requests data from Spotify the JSON response will include a set of song tracks. Each track will contain a field for name, artist, and album. For each track in the results list, your Jammming web app will display the song name, artist, and album
In a later section vou will build a method that sets the state of the search results parameter to a response from the Spotify APL
30. Add a constructor function to the App component, and pull in props from the React.Component class.
31. Inside of the App component, set a hard-coded initial value for this.state.searchResults (it will be an array containing track objects).
32. Pass the state of the App component's searchResults to the SearchResults component
33. Pass the search results from the SearchResults component to the Tracklist component.
34. In the Tracklist component, use the `map()` method to render each track in the tracks property.
Set the key attribute to track.id.
35. Render the track name, artist, and album

> Section 4: Pass down Playlist to TrackList

36. In this section, you will pass the state of a user's custom playlist title and tracks from the App component down to components that render them.
When a user adds songs from the search results list to their playlist, a method will update the state of a playlist parameter in Apps. and Jammming will render the song in the user's playlist.

In a later assessment. you will write methods that add and remove songs from the playlist. You will also write a method that updates the playlist's title.

37. Add hard-coded values for playlistName and playlistTracks to state in App.js.
38. Pass the playlist name and track from the App component to the Playlist component.
39. Pass the playlist tracks from the Playlist component to the Tracklist component.

> Section 5: Add Tracks to a Playlist

41. In Apps create a method called `addTrack()` with the following functionality:
• Accepts a track argument
• Use the track's `id` property to check if the current song is in the playlistTracks state.
• If the `id` is new, add the song to the end of the playlist.
• Set the new state of the playlist
42. Bind the current value of `this` to `addTrack()`
Pass `addTrack()` to the SearchResults component as an `onAdd` attribute.
43. Pass onAdd from the SearchResults component to the Tracklist component.
Pass `isRemoval` with a value of false down to `Tracklist`.
44. Pass onAdd from the Tracklist component to the Track component.
45. Create an `addTrack()` method in the `Track` component. Use it to add `this.props.track` to the playlist.
46. Add a constructor to the `Track` component. Call `super(props)` in the constructor method.
Bind this `addTrack()` to the current value of `this` in the constructor method.
47. In the `Track.js` `+` element add an `onClick` property with the value set to the `this.addTrack` method.

> Section 6: Remove Tracks from a Playlist

48. In this section, you will implement a process that removes a song from a user's custom playlist when the user selects the `-` sign inside of a rendered track.
49. In App js create a method called `removeTrack` with the following functionality.
• Accepts a track argument
• Uses the tracks `id` property to filter it out of `playlistTracks`
• Sets the new state of the playlist
50. In the App constructor method. bind the current value of `this` to `removeTrack()`.
Pass `removeTrack()` to the Playlist component as an `onRemove` attribute.
51. Pass `onRemove` from the Playlist component to the Tracklist component.
Pass isRemoval with a value of true down to Tracklist.
52. Pass `onRemove` and `isRemoval` from the Tracklist component to the Track component.
53. Create a `removeTrack()` method in the Track component
Use it to remove `this.props.track` from the playlist.
54. In Track.js, bind `this.removeTrack()` to the current value of `this` in the constructor method
55. In the Track.js - element, add an `onClick` property with the value set to the `this.removeTrack` method.

> Section 7: Change the Name of a Playlist

56. In this section, you will implement code that allows a learner to change the name of their playlist, and save the updated value to the App component's state.
57. In App.'s create a method called update updatePlaylistName with the following functionality:
• Accepts a name argument
• Sets the state of the playlist name to the input argument
58. In the App constructor method, bind `this` to `updatePlaylistName()`.
Pass `updatePlaylistName` to the `Playlist` component as an attribute named `onNameChange`
59. In the Playlist component, create a method called `handleNomeChange`
The method should accept an event that is triggered by an onchange attribute in the `Playlist` component's `<input>`
element.
Inside the method, call `onNameChange()` with the event target's value (from the `<input>` element).
60. Add a constructor to the Playlist component. Call `super(props)` in the constructor method.
Bind the current value of `this` to `handleNameChange`.
61. In the Playlist render method, pass `handleNameChange()` to an `onChange` property,

> Section 8: Create a Method that Saves the Playlist to a User's Account

62. In this section. you will create a method that will save a user's playlist to their Spotify account and resets the state of the playlist name and tracks array.

To accomplish the goal of this assessment, you will need to access a track property named `uri`. Spotify uses this field to reference tracks in the Spotify library. You will create an array containing the `uri` of each track in the `playlistTracks` property.

In a later section, you will pass the playlist name and the array of `uri`s to a Spotify-linked method that writes the tracks in playlistTracks to a user's account.

63. In App.js create a method called savePlaylist with the following functionality:
• Generates an array of `uri` values called `trackURIs` from the `playlistTracks` property.
•In a later step. you wil pass the `trackURIs` array and `playlistName` to a method that will save the user's playlist to their account.
64. Bind the current value of this to `savePlaylist()`.
Pass `savePlaylist` to the `Playlist` component as an attribute called `onSave`
65. In the Playlist.js `SAVE TO SPOTIFY` button element, add an `onClick` property with the value set to `this.props.onSave`.

> Section 9: Hook up Search Bar to Spotify Search

66. In this section, you will create a method that updates the `searchResults` parameter in the App component with a user's search results. You will write the logic that allows a user to enter a search parameter, receives a response from the Spotify API and updates the `searchResults` state with the results from a Spotify request.
In a later section, you will hook the , `search()` method up to the Spotify API
67. In App.js create a method called `search` with the following functionality:
• Accepts a search term
• Logs the term to the console
In a later assessment, we wil hook this method up to the Spotify API
68. In the `App` constructor method, bind `this` to `search()`. In a later assessment, we will use this in `search()`.
Pass `search()` to the `Searcher` component as an `onsearch` attribute.
69. In SearchBar.ja, create a method called `search` that passes the state of the term to `this.props.onSearch`.
70. In the SearchBar component, create a constructor method with a call to `super(props)`.
Inside of the constructor, bind the current value of `this` to `.search()`
71. In SearchBar.js create a method called `handleTermChange` with the following functionality.
• Accepts an event argument
• Sets the state of the search bar's term to the event target's value
72. In the SearchBar.js constructor method, bind the current value of `this` to `this.handleTermChange`.
73. In the SearchBar.js's `<input>` element, add an `onChange` attribute and set it equal to `this.handleTermChange`

> Section 10: Spotify Access Token

74. In the next few sections. you will write three methods that accomplish the following

* Get a Spotify users access token
* Send a search request to the Spotty API
* Save a user's playlist to their Spotify account.

Before you begin. you will need to create an empty JavaScript module called Spotify located in **src/util/Spotify.js**.
In this assessment, you wil register a Spotify application and create a method called `getAccessToken` in the Spotify module. The method will get a user's access token so that they can make requests to the Spotify API.

Use the Spotify Applications Registration Flow and Spotify Authentication guide to help you write the method.

75. Create a src/util directory and add a file called Spotify.js
76. In Spotify.js create a Spotify module as an empty object. At the bottom of Spotify.js export `Spotify`
77. Above the empty object, declare an empty variable that will hold the user's access token.
78. Inside the `Spotify` module, create a method called `getAccessToken`.
Check if the user's access token is already set, if it is, return the value saved to the access Token
79. If the access token is not already set check the URI to see if it has just been obtained.
You will be using the implicit Grant Flow to setup a user's account, and make requests. The implicit grant flow returns a user's access token in the URL.
Use the guide to determine how to parse the URL and set values for your access token and expiration time.
80. If the access token and expiration time are in the URL, implement the following steps:

* Set the access token value
* Set a variable for expiration time
* Set the access token to expire at the value for expiration time
* Clear the parameters from the URL, so the app doesn't try grabbing the access token after it has expired

81. The third condition is that the access token variable is empty and is not in the URL.

Before you write this conditional code block, you need to register your application using the Spotify application registration flow.

Give your application a relevant name and description. Also, add the following Redirect URI:

```url
http://locolhost:3000
```

82. At the top of Spotify.js create constant variables for your application's client iD and redirect URI.

Set the client ID variable to the value provided on your application page.

Set the redirect URd to `http://locolhost:3000`

83. Back in your conditional statement, redirect users to the following URL:

```url
https://accounts.spotify.com/authorize?client_id=CLIENT_ID&response_type=token&scope=playlist-modify-public&redirect_uri=REDIRECT_URI
```

Interpolate your client ID and redirect URI variables In place of CLIENT_ID and REDIRECT_URI.

> Section 11. Implement Spotify Search Request

84. In this section, you will create a method in Spotify is that accepts a search term input, passes the search term value to a Spotify request, then returns the response as a list of tracks in JSON format.

You will need the user's access token to make requests to the Spotify APt. You will use the request parameters in step four of the implicit grant flow to make requests. In the following steps, we wil use fetch to make our requests, but any method will work.

You should use the `/vi/search?type=TRACK` endpoint when making your request. Use the Spotify Web API Endpoint Reference to help format your request.

85. In the Spotify object, add a method called `search` that accepts a parameter for the user' search term.

`search()` returns a promise that will eventually resolve to the list of tracks from the search.

86. Inside `search()`, start the promise chain by returning a `GET` request (using `fetch()`) to the following Spotify endpoint:

```url
https://api.spotify.com/v1/search?type=track&q=TERM
```

Replace the value of TERM with the value saved to the search term argument.

Add an Authorization header to the request containing the access token.

87. Convert the returned response to JSON.

Then, map the converted JSON to an array of tracks. If the JSON does not contain any tracks, return an empty array.

The mapped array should contain a list of track objects with the following properties:

* ID - returned as track.id
* Name - returned as track.name
* Artist - returned as track.artists[0].name
* Album = returned as track.album.name
* URI - returned as track.uri

88. In App.js import Spotify and update the `search()` method with the `Spotify.search()` method.

Update the state of `searchResults` with the value resolved from `Spotify.search()`'s promise.

> Section 12: Save a User's Playlist

89. In this section, you will create a method called `savePlaylist` that writes the learner's custom playlist in Jammming to their Spotify account.

The `savePlaylist` method accepts a playlist name and an array of track URIs. it makes the fellowing three requests to the Spotify API

* GET current user's ID
* POST a new playlist with the input name to the current user's Spotify account. Receive the playlist ID back from the request.
* POST the track URIs to the newly-created playlist, referencing the current user's account 0Dl and the new playlist (ID)

You will update the `savePlaylist()` method in App.js to use the new `Spotify.savePlaylist()` method

90. Create a method in Spotify.js that accepts two arguments. The first argument is the name of the playlist. The second is an array of track URIs.

Inside the function, check if there are values saved to the methods two arguments. If not, return.

91. Create three default variables:

* An access token variable, set to the current user's access token
* A headers variable, set to an object with an Authorization parameter containing the user's access token in the implicit grant flow request format
* An empty variable for the user's ID

92. Make a request that returns the user's Spotify username

Convert the response to JSON and save the response `id` parameter to the user's iD variable.

93. Use the returned user ID to make a POST request that creates a new playlist in the user's account and returns a playlist ID

Use the Spotify playlist endpoints to find a request that creates a new playlist.

Set the playlist name to the value passed into the method.

Convert the response to JSON and save the response id parameter to a variable called `playlistID`.

95. In App.js update the `savePlaylist()` method to call `Spotify.savePlaylist()`.

After you call `Spotify.savePlaylist()`, reset the state of `playlistName` to `"New Playlist"` and `playlistTracks` to an empty array.


> Section 13: Deploy (Optional)

96. In this section, you will use surge to deploy your Jammming project.

You will start by installing surge globally.

In your console, run 

```zsh
npm install --global surge
```

97. Before you deploy. you need to think of a domain name with the following format:

```text
SOME_NAME.surge.sh
```

`SOME_NAME` can be replaced with anything you like

Next, you need to replace or add this URI to two locations in your project

* In `Spotify.js` set redirectURI to your new domain
* In your Spotify application, add your new domain as a redirect URI

98. Back in the command line. from the Jammming project's root directory, run

```zsh
$ npm run build
```

99. cd into the build directory and run the command

```zsh
§ surge
```

Follow the steps on the screen. Change the domain value to your new URI.

Congrats! You've just deployed a React App that queries the Spotify
