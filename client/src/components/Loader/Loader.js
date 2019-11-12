import React from "react";
import spinner from "../../assets/illustrations/spinner.gif";

function Loader() {
  return (
    <>
      <img
        src={spinner}
        style={{ width: "150px", height: "auto" }}
        alt="Loading.."
      />
    </>
  );
}

export default Loader;
