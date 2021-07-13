import React, {useState} from "react"
import Topic from "../Topic/Topic"

export default function WordCloud(props) {
   const {topics} = props;


   const setFontGroups = (arr) => {
       const volumesArr = arr.map(item => item.volume).reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []).sort((a, b) => a - b)

       function splitToGroups(array, parts) {
        let result = [];
        for (let i = parts; i > 0; i--) {
            result.push(array.splice(0, Math.ceil(array.length / i)));
        }
        return result;
    }
   return splitToGroups(volumesArr, 6)
   }

   let popularityGroups = setFontGroups(topics)

    return (<div>
    {topics.map((item, index) => <Topic key={index} item={item} popularityGroups={popularityGroups}/>)}
    </div>)
}