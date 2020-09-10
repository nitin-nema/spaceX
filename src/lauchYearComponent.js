import React, { useState, useEffect } from "react";
import axios from "axios";
export default function LauchYearComponent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.spaceXdata.com/v3/launches?limit=100")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div style={{ width: "100px", height: "100px" }}>
        <div>
          <h5 style={{ textDecoration: "underline" }}>Launch Year</h5>
        </div>
        <div>
          {data.map((item) => {
            return (
              <div
                style={{
                  width: "50px",
                  height: "25px",
                  backgroundColor: "lightgreen",
                  margin: "10px",
                }}
              >
                {item.launch_year}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
