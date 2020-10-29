import React from 'react';
import {Typography} from "@material-ui/core";
import ExpandablePageContent from "./ExpandablePageContent";

const handleClickBackToHomePage = () => {
  const expandablePage = document.getElementById("ExpandablePage")!;
  expandablePage.classList.remove("ExpandablePageIsVisible");
}

function ExpandablePage() {
  return (
      <div className="ExpandablePage" id="ExpandablePage">
        <div className="Header">
          <Typography
              className="BackToHomePage"
              onClick={() => handleClickBackToHomePage()}
          >
            Zurück zur Startseite
          </Typography>
        </div>

        <ExpandablePageContent />

      </div>
  );
}

export default ExpandablePage;
