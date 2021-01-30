import React, { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import {Typography} from "@material-ui/core";
import UrlConfig from "../../config/Urls";
import Api from "../../utils/api/Api";
import Formatter from "../../utils/Formatter";

function Statistics() {
  const [allInfections, setAllInfections] = useState(0);
  const [infectionsDelta, setInfectionsDelta] = useState(0);
  const [allDeaths, setAllDeaths] = useState(0);
  const [deathsDelta, setDeathsDelta] = useState(0);
  const [allVaccinations, setAllVaccinations] = useState(0);
  const [vaccinationsDelta, setVaccinationsDelta] = useState(0);
  const [sevenDayIncident, setSevenDayIncident] = useState(0);

  Api.makeApiRequestToRKIData(UrlConfig.urlAllInfections).then(result => setAllInfections(result));
  Api.makeApiRequestToRKIData(UrlConfig.urlInfectionsDelta).then(result => setInfectionsDelta(result));
  Api.makeApiRequestToRKIData(UrlConfig.urlAllDeaths).then(result => setAllDeaths(result));
  Api.makeApiRequestToRKIData(UrlConfig.urlDeathsDelta).then(result => setDeathsDelta(result));
  Api.makeApiRequestToRKIData(UrlConfig.urlAllVaccinations).then(result => setAllVaccinations(result));
  Api.makeApiRequestToRKIData(UrlConfig.urlAllVaccinationsDelta).then(result => setVaccinationsDelta(result));
  Api.makeIncidentRequest(UrlConfig.urlIncident).then(result => setSevenDayIncident(result));

  const colorOfElement = infectionsDelta > 10000 ? "#c42929" : "black";
  let status = "Gefährlich";
  let colorOfInfections = "#e0d916";
  let currentDate = new Date(Date.now());

  /*
      The user visits on the 30.01 @ 1:00am
      The website would show that the current data is from the 30.01 @ 3:00am.
      This should be able to fix this problem
  */
  if(currentDate.getHours() < 3){
      currentDate.setDate(currentDate.getDate() - 1);
  }

  if (sevenDayIncident > 100) {
    colorOfInfections =  "#c42929";
    status = "Kritisch";
  } else if (sevenDayIncident < 50) {
      colorOfInfections =  "#43c429";
      status = "Ungefährlich";
  }

  return (
      <div className="Statistics" id="Statistics">
        <Typography className="Header">Aktuelle Zahlen zur Corona-Pandemie in Deutschland</Typography>
        <Typography className="HeaderSmall">Aktuelle Zahlen </Typography>

        <Typography className="AllInfectionsHeader">Alle Infektionen:</Typography>
        <Tippy
          content={
            <>
            Die derzeiten Zahlen werden anhand der 7-Tage-Inzidenz gefärbt!<br/>
            Derzeitige Inzidenz: {sevenDayIncident}<br/>
            Derzeitiger Status: {status}
            </>
          }
          allowHTML={true}
        >
        <Typography
            className="AllInfections"
            id="AllInfections"
            style={{ color: colorOfInfections}}
        >
          {Formatter.formatNumber(allInfections)}
        </Typography>
        </Tippy>
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

        <Typography className="AllVaccinationsHeader">Alle Impfungen:</Typography>
        <Typography className="AllVaccinations">{Formatter.formatNumber(allVaccinations)}</Typography>
        
        <Typography className="AllVaccinationsDeltaHeader">zum Vortag:</Typography>
        <Typography className="AllVaccinationsDelta">+ {Formatter.formatNumber(vaccinationsDelta)}</Typography>

        <Typography className="TimeOfDataHeader">Stand dieser Daten:</Typography>
        <Typography className="TimeOfData">{Formatter.formatLocalDateString(currentDate.toLocaleDateString())}</Typography>
      </div>
  );
}

export default Statistics;
