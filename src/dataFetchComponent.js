import React, { useState, useEffect } from "react";
import axios from "axios";
export default function DataFetchComponent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.spaceXdata.com/v3/launches?limit=100")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  },[]);
  return (
    <>
      <div>
        {data.map((item) => (
          <div
            style={{
              width: "100px",
              height: "150px",
              backgroundColor: "white",
              margin: "10px",
            }}
            key={item.id}
          >
            {item.mission_name} #{item.flight_number}
            Mission Ids: {item.mission_id}
            Launch Year:{item.launch_year}
            Successful Launch:{item.launch_success}
            Successful Landing:{item.launch_landing}
          </div>
        ))}
      </div>
    </>
  );
}
