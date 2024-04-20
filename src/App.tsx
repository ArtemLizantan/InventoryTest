import { Route, Routes, useLocation } from "react-router-dom";
import { ROUTES } from "./routes";
import { Suspense, lazy, useEffect } from "react";
import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/preloader/Preloader";

const Home = lazy(() => import("./screens/home/Home"));
const Groups = lazy(() => import("./screens/groups/Groups"));
const Products = lazy(() => import("./screens/products/Products"));
const Settings = lazy(() => import("./screens/settings/Settings"));
const Users = lazy(() => import("./screens/users/Users"));
const Orders = lazy(() => import("./screens/orders/Orders"));

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="wrapper">
      <Suspense fallback={<Preloader mainPreloader />}>
        <Header />
        <div className="wrapper__layout">
          <Sidebar />
          <Layout>
            <AnimatePresence mode="wait" initial={false}>
              <Routes location={location} key={location.pathname}>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.GROUPS} element={<Groups />} />
                <Route path={ROUTES.PRODUCTS} element={<Products />} />
                <Route path={ROUTES.SETTINGS} element={<Settings />} />
                <Route path={ROUTES.USERS} element={<Users />} />
                <Route path={ROUTES.ORDERS} element={<Orders />} />
              </Routes>
            </AnimatePresence>
          </Layout>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
