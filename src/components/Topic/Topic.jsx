import React from "react";

export default function Topic(props) {
  const { label, sentimentScore, volume } = props.item;
  const { popularityGroups, onClick, item } = props;
  const fontSizes = [12, 18, 24, 30, 36, 42];

  const setFontSize = (num, arr) => arr.findIndex((el) => el.includes(num));

  const setFontColor = (num) =>
    num > 60 ? "green" : num < 40 ? "red" : "grey";

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
