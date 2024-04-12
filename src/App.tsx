import { Route, Routes, useLocation } from "react-router-dom";
import { ROUTES } from "./routes";
import { useEffect } from "react";
import Home from "./screens/home/Home";
import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Groups from "./screens/groups/Groups";
import Products from "./screens/products/Products";
import Settings from "./screens/settings/Settings";
import Users from "./screens/users/Users";
import Orders from "./screens/orders/Orders";

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
            <Route path={ROUTES.GROUPS} element={<Groups />} />
            <Route path={ROUTES.PRODUCTS} element={<Products />} />
            <Route path={ROUTES.SETTINGS} element={<Settings />} />
            <Route path={ROUTES.USERS} element={<Users />} />
            <Route path={ROUTES.ORDERS} element={<Orders />} />
          </Routes>
        </Layout>
      </div>
    </div>
  );
}

export default App;
