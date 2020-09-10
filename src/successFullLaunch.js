import React from "react";

export default function SuccessFullLaunch() {
  return (
    <>
      <div style={{ width: "100px", height: "100px" }}>
        <h5 style={{ textDecoration: "underline" }}>Successful Launch</h5>
        <div
          style={{
            width: "25px",
            height: "25px",
            backgroundColor: "lightgreen",
            margin: "10px",
          }}
        >
          {" "}
          True{" "}
        </div>
        <div
          style={{
            width: "25px",
            height: "25px",
            backgroundColor: "lightgreen",
            margin: "10px",
          }}
        >
          {" "}
          False{" "}
        </div>
      </div>
    </>
  );
}
