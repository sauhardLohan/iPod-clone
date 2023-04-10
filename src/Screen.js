import CoverFlow from "./CoverFlow";
import Albums from "./Albums";
import AllSongs from "./AllSongs";
import Artists from "./Artists";
import Games from "./Games";
import Settings from "./Settings";
import Menu from "./Menu";
const Screen = (props) => {
  const { selected, components, musicItem } = props;
  // to find which component heading is selected and to show it's children elements on screen
  const selectedComponent = () => {
    let a = components.filter((component) => {
      return component.componentName === selected;
    });

    return a[0];
  };
  // if selected component has no child to show in a menu the whole screen will be rendered rather than the left side only
  // so to do so made different components for such sections
  const activePageName = () => {
    if (selectedComponent().componentName === "CoverFlow") {
      return <CoverFlow />;
    } else if (selectedComponent().componentName === "Games") {
      return <Games />;
    } else if (selectedComponent().componentName === "Settings") {
      return <Settings />;
    } else if (selectedComponent().componentName === "AllSongs") {
      return <AllSongs musicItem={musicItem} />;
    } else if (selectedComponent().componentName === "Artists") {
      return <Artists />;
    } else if (selectedComponent().componentName === "Albums") {
      return <Albums />;
    }
  };
  // To render left side (menu side) or whole screen depending on selected section has child or not
  return (
    <div id="screen">
      {selectedComponent().hasChild ? (
        <div>
          {/* left side or the menu side of screen  */}
          <div id="left-side">
            <p>{selectedComponent().heading}</p>
            <Menu menu={selectedComponent().menu} />
          </div>
          {/* given a background image to right side in css file  */}
          <div id="right-side"></div>
        </div>
      ) : (
        <div>{activePageName()}</div>
      )}
    </div>
  );
};

export default Screen;
