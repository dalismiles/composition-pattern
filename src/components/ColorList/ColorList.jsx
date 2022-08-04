import ColorCard from "../ColorCard";
import "./index.css";

function ColorList(color) {
  console.log(color);
  return (
    <div className="ColorList">
      <ColorCard color={color[0]} />
      <ColorCard color={color[1]} />
      <ColorCard color={color[2]} />
      <ColorCard color={color[3]} />
      <ColorCard color={color[4]} />
    </div>
  );
}

export default ColorList;
