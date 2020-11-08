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


function MoreInformation() {
  return(
      <div className="MoreInformation">
        <Typography className="Information">Für mehr Informationen zu COVID-19, klicke </Typography>
        <Typography className="Link" onClick={() => handleClick()}>hier</Typography>

        <br />

        <Typography className="Information Copyright">Icons made by </Typography>
        <Typography className="Link Copyright" title="Freepik" onClick={() => handleClickAuthor()}>Freepik</Typography>
        <Typography className="Information Copyright"> from </Typography>
        <Typography className="Link Copyright" title="Flaticon" onClick={() => handleClickFlaticon()}> www.flaticon.com </Typography>
      </div>
  );
}

export default MoreInformation;
