import React from "react";

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { key, background, label, classname } = config;
  return (
    <button
      className={classname}
      onClick={() => selectNextBackground({ background: key })}
    >
      {label}
    </button>
  );
};
export default ColourSelector;
