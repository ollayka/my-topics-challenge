import React, { useState } from "react";
import Topic from "../Topic/Topic";
import MetaData from "../MetaData/MetaData";
import "./WordCloud.css";

export default function WordCloud(props) {
  const { topics } = props;
  const [showMetadata, setShowMetadata] = useState(false);
  const [topicSelected, setTopicSelected] = useState({});

  const setFontGroups = (arr) => {
    const volumesArr = arr
      .map((item) => item.volume)
      .reduce(
        (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
        []
      )
      .sort((a, b) => a - b);

    function splitToGroups(array, parts) {
      let result = [];
      for (let i = parts; i > 0; i--) {
        result.push(array.splice(0, Math.ceil(array.length / i)));
      }
      return result;
    }
    return splitToGroups(volumesArr, 6);
  };

  let popularityGroups = setFontGroups(topics);

  function onClick(value) {
    setShowMetadata(true);
    setTopicSelected(value);
  }

  return (
    <div className="content-container">
      <div className="wordcloud-container">
        {topics.map((item, index) => (
          <Topic
            key={index}
            item={item}
            popularityGroups={popularityGroups}
            onClick={onClick}
          />
        ))}
      </div>
      <div className="metadata-container">
        {showMetadata && <MetaData topic={topicSelected} />}
      </div>
    </div>
  );
}
