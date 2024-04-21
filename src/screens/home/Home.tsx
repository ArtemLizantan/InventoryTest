import transition from "../../transition";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
    </div>
  );
};

export default transition(Home);
