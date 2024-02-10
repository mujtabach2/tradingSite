import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const SpeedometerCard = ({ sentiment, sentimentType }) => {
  let currenttextvalue;
  if (sentiment >= 80) {
    currenttextvalue = "Very Positive";
  } else if (sentiment >= 60) {
    currenttextvalue = "Positive";
  } else if (sentiment >= 40) {
    currenttextvalue = "Neutral";
  } else if (sentiment >= 20) {
    currenttextvalue = "Negative";
  } else {
    currenttextvalue = "Very Negative";
  }

  return (
    <div className="flex flex-col items-center justify-center text-[1.5rem] font-monaco text-[#d1d4db] bg-gray-900 pt-10">
      <p>{sentimentType} Analysis Score</p>
      <ReactSpeedometer
        value={sentiment}
        maxValue={100}
        ringWidth={15}
        needleColor="WHITE"
        startColor="red"
        endColor="green"
        currentValueText={currenttextvalue}
        customSegmentLabels={[
          {
            position: "",
            color: "#d1d4db",
          },
          {
            position: "",
            color: "#d1d4db",
          },
          {
            position: "",
            color: "#d1d4db",
          },
          {
            position: "",
            color: "#d1d4db",
          },
          {
            position: "",
            color: "#d1d4db",
          },
        ]}
        textColor="#d1d4db"
      />
    </div>
  );
};
