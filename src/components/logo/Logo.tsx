import { Link } from "react-router-dom";
import "./logo.scss";
import { ROUTES } from "../../routes";

const Logo = () => {
  return (
    <div className="logo">
      <Link to={ROUTES.HOME} className="logo__btn">
        LOGO
      </Link>
    </div>
  );
};

export default Logo;
