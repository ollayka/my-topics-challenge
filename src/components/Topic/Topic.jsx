import React from "react";

export default function Topic({ popularityGroups, onClick, item }) {
  const { label, sentimentScore, volume } = item;
  const fontSizes = [12, 18, 24, 30, 36, 42];

  //function to define label's font size basing on the topic's popularity
  const setFontSize = (num, arr) => arr.findIndex((el) => el.includes(num));

  //function to define label's color basing on the topic's sentiment score
  const setFontColor = (num) =>
    num > 60 ? "green" : num < 40 ? "red" : "grey";

  //style info moved to a separate object for better readability
  const styleObj = {
    fontSize: fontSizes[setFontSize(volume, popularityGroups)],
    color: setFontColor(sentimentScore),
  };

  return (
    <div style={styleObj} onClick={() => onClick(item)}>
      {label}
    </div>
  );
}
