import React from 'react';
import {Typography} from "@material-ui/core";

const handleClick = () => {
  window.open("https://www.zusammengegencorona.de/informieren/", "true");
};

function MoreInformation() {
  return(
      <div className="MoreInformation">
        <Typography className="Information">Für mehr Informationen zu COVID-19, klicke </Typography>
        <Typography className="Link" onClick={() => handleClick()}>hier</Typography>
      </div>
  );
}

export default MoreInformation;
