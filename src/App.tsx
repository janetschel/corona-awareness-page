import React from 'react';
import './App.css';
import {Typography} from "@material-ui/core";
import ExpandablePageMenuIcon from "./components/expandable-menu/ExpandablePageMenuIcon";
import ExpandablePage from "./components/expandable-menu/ExpandablePage";
import Statistics from "./components/statistics/Statistics";
import MoreInformation from "./components/information/MoreInformation";
import MoreInformationWeb from "./components/information/MoreInformationWeb";

function App() {
  return (
    <div className="App">
      <ExpandablePageMenuIcon/>
      <ExpandablePage />

      <div className="TextWrapper">
        <Typography className="Catchline">Doch, Corona (COVID-19) gibt es!</Typography>
        <Typography className="Subtext">Und es ist eine Gefahr für jeden, wenn wir nicht zusammenhalten!</Typography>
      </div>

      <Statistics />

      <MoreInformationWeb />
      <MoreInformation />
    </div>
  );
}

export default App;
