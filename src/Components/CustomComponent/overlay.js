import "./overlay.css";
import CircularProgress from "@material-ui/core/CircularProgress";

import React from "react";

const OverlayComponent = () => {
  return (
      <div className="overlay">
        
      <CircularProgress color={'white'} thickness={9.0} size={100} className="progress" />
    </div>
  );
};

export default OverlayComponent;
