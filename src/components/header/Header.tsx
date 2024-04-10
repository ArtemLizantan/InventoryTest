import Logo from "../logo/Logo";
import Search from "./search/Search";

const Header = () => {
  return (
    <header className="header">
      <div className="header__body">
        <div className="header__left">
          <Logo />
          <Search />
        </div>
        <div className="header__right"></div>
      </div>
    </header>
  );
};

export default Header;
