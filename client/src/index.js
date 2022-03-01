import ReactDOM from "react-dom";
import { AppProviders } from "./context";
import "antd/dist/antd.css";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById("root")
);
