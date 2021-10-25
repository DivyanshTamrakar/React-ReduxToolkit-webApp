import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function DataCard({item}) {
  return (
    <Card sx={{ backgroundColor: "gray", padding: "0px" }}>
      <CardContent>
        <div className="card-content">
          <span
            style={{
              padding: "0px",
              margin: "0.3rem 0.3rem 0.3rem 0rem",
              fontWeight: "700",
            }}
          >
            {item.rocket.rocket_name}
          </span>
          <span>
            Launched country :{" "}
            <b>{item.rocket.second_stage.payloads[0].nationality}</b>
          </span>
          <span>
            Mission : <b>{item.mission_name}</b>
          </span>
          <span>
            Launch-Date : ,<b>{item.launch_year}</b>
          </span>
          <span>
            Launch-Status :{" "}
            <b>
              {item.launch_success || item.launch_success === null
                ? "Success"
                : "Failed"}
            </b>
          </span>
          <span>
            Is Upcoming : <b>{item.upcoming ? "Success" : "Failed"}</b>
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

export default DataCard;
