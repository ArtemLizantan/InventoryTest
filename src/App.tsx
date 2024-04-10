import { Route, Routes, useLocation } from "react-router-dom";
import { ROUTES } from "./routes";
import { useEffect } from "react";
import Home from "./screens/home/Home";
import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="wrapper">
      <Header />
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
