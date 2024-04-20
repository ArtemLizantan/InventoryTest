import { Link } from "react-router-dom";
import "./navigationUser.scss";
import { FaGear } from "react-icons/fa6";
import { ROUTES } from "../../../../routes";
import user from "../../../../img/user.webp";

const NavigationUser = () => {
  return (
    <div className="navigation-user">
      <div className="navigation-user__body">
        <div className="navigation-user__photo">
          <img src={user} alt="user" />
        </div>
        <div className="navigation-user__settings">
          <Link to={ROUTES.SETTINGS}>
            <FaGear />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationUser;
