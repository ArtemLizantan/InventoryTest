import { navigation } from "../../data/data";
import NavigationMenu from "./components/navigationMenu/NavigationMenu";
import NavigationUser from "./components/navigationUser/NavigationUser";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__body">
        <div className="sidebar__top">
          <NavigationUser />
        </div>
        <div className="sidebar__center">
          <NavigationMenu navigation={navigation} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
