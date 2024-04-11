import { NavLink } from "react-router-dom";
import "./navigationMenu.scss";
import { INavigationItemProps } from "../../../../interfaces/interfaces";

const NavigationMenu = ({ navigation }: INavigationItemProps) => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navigation.map(({ id, name, path }) => (
          <li key={id} className="navigation__list-item">
            <NavLink
              to={path}
              className={({ isActive }) =>
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
