import React from "react";

export default function MetaData({ topic }) {
  const { label, volume, sentiment } = topic;
  const { positive, neutral, negative } = sentiment;

  //added validation for topics without mentions assigned to a certain sentiment to display "0"
  return (
    <div data-testid="metadata">
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
