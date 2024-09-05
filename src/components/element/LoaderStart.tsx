import React from "react";

const LoaderStart = () => {
  return (
    <div id="loader" className="loader">
      <div id="loaderContent" className="loader__content">
        <div className="loader__shadow" />
        <div className="loader__box" />
      </div>
    </div>
  );
};

export default LoaderStart;
