import React from "react";
const Box = ({ onClickProp, value }) => {
  // Determine the class based on the value
  const style = value === "X" ? "box x" : "box o";

  return (
    <>
      <button onClick={onClickProp} className={style}>
        {value}
      </button>
    </>
  );
};

export default Box;
