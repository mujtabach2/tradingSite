import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const SpeedometerCard = ({ sentiment, sentimentType }) => {
  return (
    <Card className="w-[25vw] h-[30vh] bg-blue-800 shadow-inner border border-gray-400 border-2 rounded-3xl mx-auto mt-8">
      <CardContent className="flex flex-col items-center justify-center text-[1.5rem] font-monaco text-white bg-[#07051c]">
        <p>{sentimentType} Analysis Score</p>
        <ReactSpeedometer
          value={sentiment}
          maxValue={100}
          needleColor="#f3ba2f"
          startColor="red"
          endColor="green"
          customSegmentLabels={[
            {
              text: "Very Negative",
              position: "OUTSIDE",

              fontSize: "10px",
            },
            {
              text: "Negative",
              position: "OUTSIDE",

              fontSize: "10px",
            },
            {
              text: "Neutral",
              position: "OUTSIDE",

              fontSize: "10px",
            },
            {
              text: "Positive",
              position: "OUTSIDE",

              fontSize: "10px",
            },
            {
              text: "Very Positive",
              position: "OUTSIDE",

              fontSize: "10px",
            },
          ]}
        />
      </CardContent>
    </Card>
  );
};
