import React from "react";

export default function MetaData(props) {
  const { label, volume, sentiment } = props.topic;
  const { positive, neutral, negative } = sentiment;
  return (
    <div>
      <div>Information on topic "{label}":</div>
      <div>Total Mentions: {volume}</div>
      <div>
        <p>
          Positive Mentions:{" "}
          <span style={{ color: "green" }}>{positive ? positive : 0}</span>
        </p>
        <p>
          Neutral Mentions: <span>{neutral ? neutral : 0}</span>
        </p>
        <p>
          Negative Mentions:{" "}
          <span style={{ color: "red" }}>{negative ? negative : 0}</span>
        </p>
      </div>
    </div>
  );
}
