import { NavLink } from "react-router-dom";
import "./navigationMenu.scss";

const navigation = [
  { id: 1, name: "Приход", path: "/" },
  { id: 2, name: "Группы", path: "/" },
  { id: 3, name: "Продукты", path: "/" },
  { id: 4, name: "Пользователи", path: "/" },
  { id: 5, name: "Настройки", path: "/" },
];

const NavigationMenu = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navigation.map(({ id, name, path }) => (
          <li key={id} className="navigation__list-item">
            <NavLink
              to={path}
              className={(isActive) =>
                "navigation__list-link" +
                (!isActive ? " unselected" : " _active")
              }
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
