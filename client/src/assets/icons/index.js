import React from "react";

import Facebook from "./src/Facebook";
import Instagram from "./src/Instagram";
import LinkedIn from "./src/LinkedIn";

const Icon = props => {
  switch (props.name) {
    case "Facebook":
      return <Facebook {...props} />;
    case "Instagram":
      return <Instagram {...props} />;
    case "LinkedIn":
      return <LinkedIn {...props} />;
    default:
      return;
  }
};

export default Icon;
