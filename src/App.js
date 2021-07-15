import "./App.css";
import data from "./topics.json";
import WordCloud from "./components/WordCloud/WordCloud.jsx";

//access data and randomize the order of its display at the moment of rendering the App component
const { topics } = data;
const topicsRandomized = topics.sort(() => Math.random() - 0.5);

export default function App() {
  return (
    <div className="App">
      <h1>My Topics Challenge</h1>
      <WordCloud topics={topicsRandomized} />
    </div>
  );
}
