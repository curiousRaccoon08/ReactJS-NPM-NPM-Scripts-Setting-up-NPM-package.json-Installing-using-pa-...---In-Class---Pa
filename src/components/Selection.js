import React, { useState } from "react";

const Selection = (props) => {
  const { applyColor } = props;
  const { color, setColor } = useState({ background: "" });
  // const colorfn = () => {
  //   setColor(applyColor)
  // }
  return (
    <>
      <div className="fix-box" onClick={() => applyColor(setColor)}>
        <h2 className="subheading">Selection</h2>
      </div>
    </>
  );
};

export default Selection;
