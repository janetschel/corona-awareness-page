import React, { useState } from 'react';
import {Typography} from "@material-ui/core";
import UrlConfig from "../../config/Urls";
import Api from "../../utils/api/Api";
import Formatter from "../../utils/Formatter";

function Statistics() {
  const [allInfections, setAllInfections] = useState(0);
  const [infectionsDelta, setInfectionsDelta] = useState(0);
  const [allDeaths, setAllDeaths] = useState(0);
  const [deathsDelta, setDeathsDelta] = useState(0);

  Api.makeApiRequestToRKIData(UrlConfig.urlAllInfections).then(result => setAllInfections(result));
  Api.makeApiRequestToRKIData(UrlConfig.urlInfectionsDelta).then(result => setInfectionsDelta(result));
  Api.makeApiRequestToRKIData(UrlConfig.urlAllDeaths).then(result => setAllDeaths(result));
  Api.makeApiRequestToRKIData(UrlConfig.urlDeathsDelta).then(result => setDeathsDelta(result));

  const colorOfElement = infectionsDelta > 10000 ? "#c42929" : "black";

  return (
      <div className="Statistics">
        <Typography className="Header">Aktuelle Zahlen zur Corona-Pandemie in Deutschland</Typography>
        <Typography className="HeaderSmall">Aktuelle Zahlen </Typography>

        <Typography className="AllInfectionsHeader">Alle Infektionen:</Typography>
        <Typography className="AllInfections">{Formatter.formatNumber(allInfections)}</Typography>
        <Typography className="AllInfectionsDeltaHeader">zum Vortag:</Typography>
        <Typography
            className="AllInfectionsDelta"
            style={{ color: colorOfElement}}
        >
          + {Formatter.formatNumber(infectionsDelta)}
        </Typography>

        <Typography className="AllDeathsHeader">Alle Todesfälle:</Typography>
        <Typography className="AllDeaths">{Formatter.formatNumber(allDeaths)} †</Typography>

        <Typography className="AllDeathsDeltaHeader">zum Vortag:</Typography>
        <Typography className="AllDeathsDelta">+ {Formatter.formatNumber(deathsDelta)}</Typography>

        <Typography className="TimeOfDataHeader">Stand dieser Daten:</Typography>
        <Typography className="TimeOfData">{Formatter.formatLocalDateString((new Date(Date.now())).toLocaleDateString())}</Typography>
      </div>
  );
}

export default Statistics;
