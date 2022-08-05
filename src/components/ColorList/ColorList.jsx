import ColorCard from "../ColorCard";
import "./index.css";

const color = ["#5ba1b0", "#acd1d1", "#dce2e1", "#d8caae", "#b18f69"];

function ColorList({ children }) {
  return (
    <div className="ColorList">
      {color.map((color, i) => (
        <ColorCard color={color} key={i} />
      ))}
      {children}
    </div>
  );
}

export default ColorList;
