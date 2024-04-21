import { Helmet } from "react-helmet";
import transition from "../../transition";

const Users = () => {
  return (
    <>
      <Helmet>
        <title>Users</title>
      </Helmet>
      <section className="users">
        <div className="empty">Здесь еще ничего нет!</div>
      </section>
    </>
  );
};

export default transition(Users);
