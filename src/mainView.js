import React from "react";
import Header from "./header";
import FilterComponent from "./filterComponent";
import DataFetchComponent from "./dataFetchComponent";
export default function MainView() {
  return (
    <>
      <div style={{ backgroundColor: "lightgray" }}>
        <Header />
        <div id="main">
          <div style={{ width: "20%", float: "left" }}>
            <FilterComponent />
          </div>
          <div style={{ width: "80%", float: "left" }}>
            <DataFetchComponent />
          </div>
        </div>
      </div>
    </>
  );
}
