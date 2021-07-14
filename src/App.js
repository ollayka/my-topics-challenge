import "./App.css";
import data from "./topics.json";
import WordCloud from "./components/WordCloud/WordCloud.jsx";

const { topics } = data;

export default function App() {
  return (
    <div className="App">
      <h1>My Topics Challenge</h1>
      <WordCloud topics={topics} />
    </div>
  );
}
