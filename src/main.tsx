import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/InventoryTest/">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
