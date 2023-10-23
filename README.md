# This project was bootstrapped with [Create React App] (https://github.com/facebook/create-reactapp).
### npm start
 Starts the development server.
### npm run build
 Bundles the app into static files for production.
### npm test
 Starts the test runner.
### npm run eject
 Removes this tool and copies build dependencies, configuration files
 and scripts into the app directory.
**Note: this is a one-way operation. Once you `eject`, you can’t go back! **
## Learn More
You can learn more in the [Create React App documentation] (https://facebook.github.io/createreact-app/docs/getting-started).
To learn React, check out the [React documentation] (https://reactjs.org/).
## How to operate
On clicking of the centre button go inside the menu
Clicking on the menu hide the menu and open a screen of that particular option, like settings, games
etc
Click and hold on the circular menu and move the mouse in a circular fashion inside the menu
boundary (white circle is the menu) to navigate in the iPod menu
## UI
Coverflowshows coverflow section with coverflow heading
MusicIt has a menu with three components all songs artists and albums.
1.All Songs You can play and pause song by clicking on center button.
In all songs menu there are three songs to choose from you can change between them by clicking on
next button (>>|) or previous button (|<<).
If a song completes it automatically switches to next song.
2.Artists shows list of artists
3.Albums shows list of albums.
4.Games shows games section with games heading and icon
5.Settingsshows settings section with settings heading and icon
# Follow steps below to set up on local directory.
## How To Install
Clone this project Start by installing npm if you don't have it already. Navigate to Project Directory
by:
### cd iPod
## run following commandsnpm install
### npm start
## Install zingtouch
### npm i zingtouch
# Technologies
## React
React is a JavaScript library for building user interfaces.
React is used to build single-page applications.
React allows us to create reusable UI components.
## React DOM
This package serves as the entry point to the DOM and server renderers for React. It is intended to
be paired with the generic React package, which is shipped as react to npm.
## ZingTouch
zingtouch
A JavaScript gesture detection library for the modern web
ZingTouch provides six standard gestures that are completely customizable.
• Rotate
A Rotate is detected when the user has two inputs moving about a circle on the edges of a diameter.
• Emits
1. angle - The angle of the initial right most input, in relation to the unit circle.
2. distanceFromOrigin - The angular distance traveled by the initial right most post.
3. distanceFromLast - The change of angle between the last position and the current position.
Positive denotes a counter-clockwise motion, while negative denotes a clockwise motion.
## COMPONENTS-
• index.js
uses ReactDom to render App component
• index.css
css file
• App.js
has two components Screen and Controls.
Screen is the upper white part where different components are visible.
Controls is the lower part with different buttons to control and circular menu to navigate in the
menu.
• Screen.js
Screen section at top of IPod where different components are visible.
• Controls.js
Controls section is the lower part with different buttons to control and circular menu to navigate in
the menu.
• Menu.js
Menu section showing all the the sections (Menu items)
• MenuItems.js
Menu items to show all sections available in menu
• CoverFlow.js
Coverflow section to show it's heading
• AllSongs.js
Displays currently played song
• Artists.js
Artists Section showing all the Artists available
• Albums.js
Albums Section showing all the albums available (edm,bollywood,english)
• Games.js
Games section to show it's heading and games icon
• Settings.js
Settings section to show it's heading and Settings icon
