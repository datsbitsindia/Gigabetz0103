import { Route } from "react-router-dom";
import AllSportsDetails from "../views/LiveSports/allSportsDetails";

import "../css/spinsporticons.woff2";
import "../css/style.css";
import "../css/Interface_Normal.woff2";
import "../css/Interface_Bold.woff2";
import "../css/demo.css";
import "../css/demo2.css";
import "../css/EventListsDesktop.min.css";
import "../css/EventListsDesktop.min.css";

import "../css/PromotionsSportsDesktop.min.css";
import "../css/dynamicfilteringdesktop.min.css";
import "../css/eventsdesktop.min.css";
import "../css/quicksearchdesktop.min.css";
import "../css/SportsCoreDesktop.min.css";

const SportsDetails = () => {
  return (
    <div>
      <Route exact path="/sports/details" component={AllSportsDetails} />
    </div>
  );
};

export default SportsDetails;
