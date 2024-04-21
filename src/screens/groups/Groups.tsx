import { Helmet } from "react-helmet";
import transition from "../../transition";

const Groups = () => {
  return (
    <>
      <Helmet>
        <title>Groups</title>
      </Helmet>

      <section className="groups">
        <div className="empty">Здесь еще ничего нет!</div>
      </section>
    </>
  );
};

export default transition(Groups);
