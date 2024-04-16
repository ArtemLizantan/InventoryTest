import { Link } from "react-router-dom";
import "./navigationUser.scss";
import { FaGear } from "react-icons/fa6";
import { ROUTES } from "../../../../routes";

const NavigationUser = () => {
  return (
    <div className="navigation-user">
      <div className="navigation-user__body">
        <div className="navigation-user__photo">
          <img
            src="https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"
            alt="user"
          />
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
