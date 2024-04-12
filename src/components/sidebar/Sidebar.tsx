import { ROUTES } from "../../routes";
import NavigationMenu from "./components/navigationMenu/NavigationMenu";
import NavigationUser from "./components/navigationUser/NavigationUser";
import "./sidebar.scss";

const navigation = [
  { id: 1, name: "Приход", path: ROUTES.ORDERS },
  { id: 2, name: "Группы", path: ROUTES.GROUPS },
  { id: 3, name: "Продукты", path: ROUTES.PRODUCTS },
  { id: 4, name: "Пользователи", path: ROUTES.USERS },
  { id: 5, name: "Настройки", path: ROUTES.SETTINGS },
];

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
