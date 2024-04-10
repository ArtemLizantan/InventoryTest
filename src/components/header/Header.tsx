import Logo from "../logo/Logo";
import Search from "./search/Search";
import "./header.scss";
import CurrentDate from "./currentDate/CurrentDate";

const Header = () => {
  return (
    <header className="header">
      <div className="header__body">
        <div className="header__left">
          <Logo />
          <Search />
        </div>
        <div className="header__right">
          <CurrentDate />
        </div>
      </div>
    </header>
  );
};

export default Header;
