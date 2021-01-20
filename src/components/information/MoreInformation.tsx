import React from 'react';
import {Typography} from "@material-ui/core";

const handleClick = () => {
  window.open("https://www.zusammengegencorona.de/informieren/", "true");
};

const handleClickAuthor = () => {
  window.open("https://www.flaticon.com/authors/freepik", "true");
};

const handleClickFlaticon = () => {
  window.open("https://www.flaticon.com/", "true");
};

const handleClickSourceRKI = () => {
  window.open("https://experience.arcgis.com/experience/478220a4c454480e823b17327b2bf1d4");
};

const handleClickSourceEsri = () => {
  window.open("https://experience.arcgis.com/experience/db557289b13c42e4ac33e46314457adc");
};


function MoreInformation() {
  return(
      <div className="MoreInformation">
        <Typography className="Information">Für mehr Informationen zu COVID-19, klicke </Typography>
        <Typography className="Link" onClick={() => handleClick()}>hier</Typography>

        <br />
        <Typography className="VaccineInformation">Daten zur Impfung werden nur Werktags aktualisiert!</Typography>
        <br />

        <Typography className="Information Copyright">Icons made by </Typography>
        <Typography className="Link Copyright" title="Freepik" onClick={() => handleClickAuthor()}>Freepik</Typography>
        <Typography className="Information Copyright"> from </Typography>
        <Typography className="Link Copyright" title="Flaticon" onClick={() => handleClickFlaticon()}> www.flaticon.com </Typography>
        <br/>
        <Typography className="Information Copyright">Current data from </Typography>
        <Typography className="Link Copyright" title="RKI" onClick={() => handleClickSourceRKI}>RKI</Typography>
        <Typography className="Information Copyright"> and </Typography>
        <Typography className="Link Copyright" title="ESRI" onClick={() => handleClickSourceEsri()}>ESRI</Typography>
      </div>
  );
}

export default MoreInformation;
