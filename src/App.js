import "./styles.css";
import React from "react";
import Screen from "./Screen";
import Controls from "./Controls";
import cheapThrillsCover from "./cheapThrillsCover.png";
import kesariyaCover from "./kesariyaCover.png";
import Cover from "./Cover.png";
import ZingTouch from "zingtouch";
// class component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // menu movement depending on if wheel (controls-menu) is scrolled in clockwise (downward) or anticlockwise (upward) manner
      menuMovement: "",
      // initially selected menu is IPod
      // changed when selected menu is changed when clicked on inner-button
      selected: "IPod",
      // if currently a song is being played or not
      songPlayed: false,
      // different components for different sections
      components: [
        {
          // IPod section component
          componentName: "IPod",
          // IPod section has child to show in left side (menu section) of screen
          hasChild: true,
          // this section is the main section and it's parent is itself
          parent: "IPod",
          // heading of secton
          heading: "IPod.js",
          // menu object to show menu section of IPod heading
          menu: [
            {
              // component name
              componentName: "CoverFlow",
              // title to show on screen
              title: "Cover Flow",
              // counter to detect if selected or not
              counter: 0,
              // initially first section is selected
              isSelected: true
            },
            {
              // component name
              componentName: "Music",
              // title to show on screen
              title: "Music",
              // counter to detect if selected or not
              counter: 1,
              isSelected: false
            },
            {
              // component name
              componentName: "Games",
              // title to show on screen
              title: "Games",
              // counter to detect if selected or not
              counter: 2,
              isSelected: false
            },
            {
              componentName: "Settings",
              title: "Settings",
              counter: 3,
              isSelected: false
            }
          ]
        },
        {
          // Coverflow section component
          componentName: "CoverFlow",
          // has no child so no section to show in menu
          hasChild: false,
          // parent is IPod section to handle menu button click in controls
          parent: "IPod"
        },
        {
          // Music section component
          componentName: "Music",
          // parent is IPod section to handle menu button click in controls
          parent: "IPod",
          hasChild: true,
          heading: "Music",
          // menu object to show menu section of Music heading
          menu: [
            {
              // component name
              componentName: "AllSongs",
              // title to show on screen
              title: "All songs",
              // counter to detect if selected or not
              counter: 0,
              // initially first section is selected
              isSelected: true
            },
            {
              // component name
              componentName: "Artists",
              // title to show on screen
              title: "Artists",
              // counter to detect if selected or not
              counter: 1,
              isSelected: false
            },
            {
              // component name
              componentName: "Albums",
              // title to show on screen
              title: "Albums",
              // counter to detect if selected or not
              counter: 2,
              isSelected: false
            }
          ]
        },
        {
          // All songs section component
          componentName: "AllSongs",
          // has no child so no section to show in men
          hasChild: false,
          // parent is Music section to handle menu button click in controls
          parent: "Music"
        },
        {
          // Artists section component
          componentName: "Artists",
          // has no child so no section to show in menu
          hasChild: false,
          // parent is Music section to handle menu button click in controls
          parent: "Music"
        },
        {
          // Albums section component
          componentName: "Albums",
          // has no child so no section to show in menu
          hasChild: false,
          // parent is Music section to handle menu button click in controls
          parent: "Music"
        },
        {
          // Games section component
          componentName: "Games",
          // has no child so no section to show in menu
          hasChild: false,
          // parent is IPod section to handle menu button click in controls
          parent: "IPod"
        },
        {
          // Settings section component
          componentName: "Settings",
          // has no child so no section to show in menu
          hasChild: false,
          // parent is IPod section to handle menu button click in controls
          parent: "IPod"
        }
      ],
      musicItems: [
        // Music items to show in All Songs section
        {
          // muusic name
          musicName: "01 Firestone",
          // artist name
          artistName: "Kygo,Conrad Sewell",
          // music cover image
          img: Cover,
          // to detect if is currently played or not
          currentlyPlayed: true,
          // to detect if is currently played or not by creating a counter
          counter: 0,
          // src to get source in audio element in AllSongs.js
          src: "edm"
        },
        {
          musicName: "02 Kesariya",
          artistName: "Arijit Singh,Pritam",
          img: kesariyaCover,
          currentlyPlayed: false,
          counter: 1,
          src: "Kesariya"
        },
        {
          musicName: "03 Cheap Thrills",
          artistName: "Sia",
          img: cheapThrillsCover,
          currentlyPlayed: false,
          counter: 2,
          src: "cheapThrills"
        }
      ]
    };
  }
  // find the component which is selected by comparing with the this.state.selected
  selectedComponent = () => {
    let a = this.state.components.filter((component) => {
      return component.componentName === this.state.selected;
    });
    return a[0];
  };
  // handle counter for menu section as if menuMovement is upward make isSelected of it's previous menu item to be true and it's own isSelected false
  // and if menuMovement is downward make isSelected of it's next menu item to be true and it's own isSelected false
  // counter is helpful in getting the selected component as it works like it's id

  handleCounter = () => {
    let a = this.selectedComponent();
    let { components } = this.state;
    let menu = a.menu;
    let menuMovement = this.state.menuMovement;
    const selectedMenuItems = menu.filter((item) => item.isSelected);
    const selectedMenuItem = selectedMenuItems[0];
    let counter = selectedMenuItem.counter;

    if (menuMovement === "upward") {
      // in upward movement go to previous menu section on screen and if selected menu item is 0th element go to the last element
      if (counter !== 0) {
        counter--;
      } else if (counter === 0) {
        counter = menu.length - 1;
      }
    } else if (menuMovement === "downward") {
      // in downward movement go to next menu section on screen and if selected menu item is last element go to the 0th element
      if (counter !== menu.length - 1) {
        counter++;
      } else if (counter === menu.length - 1) {
        counter = 0;
      }
    }
    // making the isSelected of current menu item to be false and next selected item to be true
    selectedMenuItem.isSelected = false;
    const newSelectedItem = menu.filter((item) => item.counter === counter);

    for (let i = 0; i < menu.length; i++) {
      if (menu[i].counter !== counter) {
        menu[i].isSelected = false;
      }
    }

    newSelectedItem[0].isSelected = true;

    this.setState({
      components
    });
  };
  // changing the menuMovement of state to be upward
  onUpwardMovement = () => {
    let { menuMovement } = this.state;
    menuMovement = "upward";
    this.setState({
      menuMovement
    });
    setTimeout(() => {
      this.handleCounter();
    }, 0);
  };
  // changing the menuMovement of state to be upward
  onDownwardMovement = () => {
    let { menuMovement } = this.state;
    menuMovement = "downward";
    this.setState({
      menuMovement
    });
    setTimeout(() => {
      this.handleCounter();
    }, 0);
  };
  // control the menuControll rotation action if rotation of it is more than 15 degrees and if rotation is in clockwise direction move downward and if in anti-clockwise move upward
  menuControll = (event) => {
    let a = this.selectedComponent();
    if (!a.hasChild) {
      return;
    }
    if (event.detail.distanceFromOrigin === 0) {
      this.angle = event.detail.angle;
    }
    if (Math.abs(this.angle - event.detail.angle) > 300) {
      this.angle = Math.abs(event.detail.angle);
      if (event.detail.distanceFromLast === 0) {
        return;
      } else if (event.detail.distanceFromLast < 0) {
        this.onDownwardMovement();
      } else {
        this.onUpwardMovement();
      }
    } else if (Math.abs(this.angle - event.detail.angle) > 15) {
      this.angle = Math.abs(event.detail.angle);
      if (event.detail.distanceFromLast === 0) {
        return;
      } else if (event.detail.distanceFromLast > 0) {
        this.onDownwardMovement();
      } else {
        this.onUpwardMovement();
      }
    }
  };
  // handle menu button click in controls by changing selected to be selectedComponent parent component
  handleMenuClick = () => {
    let { selected } = this.state;
    selected = this.selectedComponent().parent;
    this.setState({
      selected
    });
  };
  // find the music currently played
  musicCurrentlyPlayed = () => {
    if (this.selectedComponent().componentName !== "AllSongs") {
      return;
    }
    const { musicItems } = this.state;
    return musicItems.filter((musicItem) => {
      return musicItem.currentlyPlayed;
    })[0];
  };
  // handle click of next play button in controls for AllSongs section to change to next song
  handleNextMusicPlayer = () => {
    if (this.selectedComponent().componentName !== "AllSongs") {
      return;
    }

    let { songPlayed } = this.state;

    songPlayed = false;
    const { musicItems } = this.state;
    // find current song
    let a = musicItems.filter((musicItem) => {
      return musicItem.currentlyPlayed;
    })[0];
    let counter = a.counter;
    let b;
    // if current song is last song so next song should be first song
    // else increase counter
    if (counter === musicItems.length - 1) {
      b = musicItems[0];
    } else {
      b = musicItems.filter((musicItem) => {
        return musicItem.counter === counter + 1;
      })[0];
    }
    // current song currentlyPlayed->false
    a.currentlyPlayed = false;
    // next song currentlyPlayed->false
    b.currentlyPlayed = true;
    this.setState({
      musicItems,
      songPlayed
    });
  };
  // handle click of inner-button in controls for Screen section to to select a menu or  play or pause a song in All songs section
  handleSelectionButtonClick = () => {
    if (this.selectedComponent().componentName === "AllSongs") {
      // in AllSongs section play or pause a song and also if a song ends move on to next song
      let { songPlayed } = this.state;

      const audioController = document.querySelector("#audio-controller audio");
      // if a song ends move on to next song
      audioController.addEventListener("ended", () => {
        audioController.currentTime = 0;

        songPlayed = false;
        this.handleNextMusicPlayer();
      });
      // play or pause a song
      if (!songPlayed) {
        audioController.play();
        songPlayed = true;
      } else if (songPlayed) {
        audioController.pause();

        songPlayed = false;
      }

      this.setState({
        songPlayed
      });

      return;
    }
    // show the menu section of selected menu item click
    let { selected } = this.state;
    let a = this.selectedComponent();
    if (!a.hasChild) {
      return;
    }
    selected = a.menu.filter((item) => {
      return item.isSelected;
    })[0].componentName;

    this.setState({
      selected
    });
  };
  // handle click of previous play button in controls for AllSongs section to change to previous song
  handlePrevMusicPlayer = () => {
    if (this.selectedComponent().componentName !== "AllSongs") {
      return;
    }

    let { songPlayed } = this.state;

    songPlayed = false;
    const { musicItems } = this.state;
    // find current song
    let a = musicItems.filter((musicItem) => {
      return musicItem.currentlyPlayed;
    })[0];
    let counter = a.counter;
    let b;
    // if current song is first song so next song should be last song
    // else decrease counter
    if (counter === 0) {
      b = musicItems[musicItems.length - 1];
    } else {
      b = musicItems.filter((musicItem) => {
        return musicItem.counter === counter - 1;
      })[0];
    }
    // current song currentlyPlayed->false
    a.currentlyPlayed = false;
    // next song to be played currentlyPlayed->false
    b.currentlyPlayed = true;
    this.setState({
      musicItems,
      songPlayed
    });
  };
  // bind controls-menu component to ZingTouch rotation after rendering
  componentDidMount() {
    const controlsMenu = document.getElementById("controls-menu");
    const activeRegion = ZingTouch.Region(controlsMenu);
    activeRegion.bind(controlsMenu, "rotate", (e) => {
      this.menuControll(e);
    });
  }
  render() {
    return (
      <div id="App">
        {/* Main IPod body  */}
        {/* Div containing screen and controls body  */}
        <div id="main-body">
          {/* Screen Section  */}
          <Screen
            components={this.state.components}
            selected={this.state.selected}
            musicItem={this.musicCurrentlyPlayed()}
          />
          {/* Controls Section  */}
          <Controls
            handleMenuClick={this.handleMenuClick}
            handleSelectionButtonClick={this.handleSelectionButtonClick}
            handleNextMusicPlayer={this.handleNextMusicPlayer}
            handlePrevMusicPlayer={this.handlePrevMusicPlayer}
          />
        </div>
      </div>
    );
  }
}

export default App;
