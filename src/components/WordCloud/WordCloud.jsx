import React, { useState } from "react";
import Topic from "../Topic/Topic";
import MetaData from "../MetaData/MetaData";
import "./WordCloud.css";

export default function WordCloud({ topics }) {
  //define if the metadata should be displayed
  const [showMetadata, setShowMetadata] = useState(false);
  //define info on which topic should be displayed
  const [topicSelected, setTopicSelected] = useState({});

  //function to split topics into 6 popularity groups (to be displayed in different font sizes)
  const setFontGroups = (arr) => {
    const volumesArr = arr
      .map((item) => item.volume)
      .reduce(
        (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
        []
      )
      .sort((a, b) => a - b);

    function splitIntoGroups(array, parts) {
      let result = [];
      for (let i = parts; i > 0; i--) {
        result.push(array.splice(0, Math.ceil(array.length / i)));
      }
      return result;
    }
    return splitIntoGroups(volumesArr, 6);
  };

  //assign topics into different popularity groups (arrays)
  let popularityGroups = setFontGroups(topics);

  //update metadata-related states on mouse click
  function onClick(value) {
    setShowMetadata(true);
    setTopicSelected(value);
  }

  return (
    <div className="content-container">
      {/* map through the randomized topics array, display each label as a component, pass down necessary props  */}
      <div data-testid="wordcloud" className="wordcloud-container">
        {topics.map((item, index) => (
          <Topic
            key={index}
            item={item}
            popularityGroups={popularityGroups}
            onClick={onClick}
          />
        ))}
      </div>
      {/* if a label got clicked, show a div with metadata */}
      <div className="metadata-container">
        {showMetadata && <MetaData topic={topicSelected} />}
      </div>
    </div>
  );
}
