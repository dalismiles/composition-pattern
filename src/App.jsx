import "./App.css";
import ColorCard from "./components/ColorCard";
import ColorList from "./components/ColorList";
import MainContent from "./components/MainContent";

const color = ["#5ba1b0", "#acd1d1", "#dce2e1", "#d8caae", "#b18f69"];

function App() {
  return (
    <div className="App">
      <MainContent>
        <h1 className="MainContent__title">Sandy Beach Color Scheme</h1>
        <img
          className="MainContent__img"
          src={
            "https://img.pixers.pics/pho(s3:700/PI/39/77/61/00/7/700_PI397761007_c6477604d480fc636d7f3c8f0ae337a0_5b7abe971ed59_.,700,467,jpg)/sheer-window-curtains-beautiful-beach-sand-and-sea-at-sunset-times-with-copy-space-for-background-vintage-filter-and-boost-up-color-processing.jpg.jpg"
          }
          alt="img"
        />
        <ColorList>
          {" "}
          {color.map((color, i) => (
            <ColorCard color={color} key={i} />
          ))}{" "}
        </ColorList>
      </MainContent>
    </div>
  );
}

export default App;
