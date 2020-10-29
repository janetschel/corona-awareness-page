import React from 'react';

const handleClick = () => {
  const expandablePage = document.getElementById("ExpandablePage")!;
  expandablePage.classList.add("ExpandablePageIsVisible");
};

function ExpandablePageMenuIcon() {
  return (
      <div className="ExpandablePageMenuIcon" onClick={handleClick}/>
  );
}

export default ExpandablePageMenuIcon;
