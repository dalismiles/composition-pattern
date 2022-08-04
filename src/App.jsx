import "./App.css";
import ColorCard from "./components/ColorCard";
import ColorList from "./components/ColorList";
import MainContent from "./components/MainContent";

const color = ["#5ba1b0", "#acd1d1", "#dce2e1", '#d8caae', '#b18f69' ];

function App() {
  return (
    <div className="App">
      <MainContent {...color} />
    </div>
  );
}

export default App;
