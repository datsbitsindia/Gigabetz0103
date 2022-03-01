import { Route } from "react-router-dom";
import AllSports from "../views/LiveSports/allSports";

import "../css/spinsporticons.woff2";
import "../css/style.css";
import "../css/Interface_Normal.woff2";
import "../css/Interface_Bold.woff2";
import "../css/demo.css";


const Sports = () => {
  return (
    <div>
      <Route exact path="/sports" component={AllSports} />
    </div>
  );
};

export default Sports;
