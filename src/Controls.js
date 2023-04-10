const Controls = (props) => {
  // Controls section to control different functionalities to control screen like menu,nextsong,prevsong button
  const {
    handleMenuClick, //to handle menu button click to go to parent section
    handleSelectionButtonClick, //to handle innner button click which helps to select a menu and play or pause song
    handleNextMusicPlayer, //to handle next music played button click
    handlePrevMusicPlayer //to handle previous music played button click
  } = props;
  return (
    <div id="controls">
      {/* scroll section or the wheel section to change selected menu secton  */}
      <div id="controls-menu">
        {/* menu button to go to parent element */}
        <button
          className="control-list"
          style={{ top: -1, fontSize: 20 }}
          onClick={handleMenuClick}
        >
          Menu
        </button>
        {/* next song play button  */}
        <button className="control-list" style={{ top: 67.5, right: -1 }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3984/3984226.png"
            id="forward"
            onClick={handleNextMusicPlayer}
            alt="forward-icon"
          ></img>
          {/* previous song play button  */}
        </button>
        <button className="control-list" style={{ top: 67.5, left: -1 }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3984/3984226.png"
            onClick={handlePrevMusicPlayer}
            alt="backward-icon"
          ></img>
        </button>
        {/* play pause button  */}
        <button className="control-list" style={{ bottom: -1 }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3793/3793977.png"
            alt="play-pause"
          ></img>
        </button>
      </div>
      {/* inner button in middle to select a menu and play or pause song */}
      <button id="inner-button" onClick={handleSelectionButtonClick}></button>
    </div>
  );
};
export default Controls;
