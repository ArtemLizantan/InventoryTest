import { Route, Routes, useLocation } from "react-router-dom";
import { ROUTES } from "./routes";
import { useEffect } from "react";
import Home from "./screens/home/Home";
import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="wrapper">
      <Header />
      <div className="wrapper__layout">
        <Sidebar />
        <Layout>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
          </Routes>
        </Layout>
      </div>
    </div>
  );
}

export default App;
