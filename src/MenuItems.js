const MenuItems = (props) => {
  // Menu items to show all sections available in menu and control which section is being selected by control wheel(controls-menu)
  const { item } = props;
  // selected menu css properties in a object
  const selectedMenu = {
    backgroundColor: "blue",
    borderRadius: 4,
    background: "linear-gradient(to right, #505052, #4848a0)",
    color: "white"
  };
  // unselected menu css properties in a object
  const unSelectedMenu = {
    backgroundColor: "transparent",
    color: "black"
  };
  return (
    <div id="menu-items">
      <button style={item.isSelected ? selectedMenu : unSelectedMenu}>
        <div>{item.title}</div>{" "}
        <div style={{ height: 20, width: 20 }}>
          {/* next icon which appears if menu item is selected   */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/556/556668.png"
            alt="next-icon"
            width={20}
            height={20}
            style={item.isSelected ? { display: "block" } : { display: "none" }}
          ></img>
        </div>
      </button>
    </div>
  );
};
export default MenuItems;
