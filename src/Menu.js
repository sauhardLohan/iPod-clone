import MenuItems from "./MenuItems";
const Menu = (props) => {
  const { menu } = props;
  // Menu section showing all the the sections (Menu items) by giving all the details about menu to menu items available in selected heading

  return (
    <div>
      {menu.map((item) => (
        <MenuItems item={item} key={item.counter} />
      ))}
    </div>
  );
};
export default Menu;
