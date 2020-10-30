import React from 'react';

const handleClick = () => {
  const expandablePage = document.getElementById("ExpandablePage")!;
  const body = document.body!;

  expandablePage.classList.add("ExpandablePageIsVisible");
  body.classList.add("BlackedOut");
};

function ExpandablePageMenuIcon() {
  return (
      <div className="ExpandablePageMenuIcon" onClick={handleClick}/>
  );
}

export default ExpandablePageMenuIcon;
