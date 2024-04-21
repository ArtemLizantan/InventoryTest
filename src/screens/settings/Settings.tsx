import { Helmet } from "react-helmet";
import transition from "../../transition";

const Settings = () => {
  return (
    <>
      <Helmet>
        <title>Settings</title>
      </Helmet>

      <section className="settings">
        <div className="empty">Здесь еще ничего нет!</div>
      </section>
    </>
  );
};

export default transition(Settings);
