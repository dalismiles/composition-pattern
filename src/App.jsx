import "./App.css";
import ColorList from "./components/ColorList";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="App">
      <MainContent>
        <h1 className="MainContent__title">Sandy Beach Color Scheme</h1>
        <ColorList />
      </MainContent>
    </div>
  );
}

export default App;
