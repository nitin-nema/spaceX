import React from "react";
import LaunchYearComponent from "./lauchYearComponent";
import SuccessFullLanding from "./successFullLanding";
import SuccessFullLaunch from "./successFullLaunch";
export default function FilterComponent() {
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          width: "20%",
          float: "left",
        }}
      >
        <h4 style={{ alignItems: "left" }}>Filters</h4>
        <LaunchYearComponent />
        <SuccessFullLaunch />
        <SuccessFullLanding />
      </div>
    </>
  );
}
