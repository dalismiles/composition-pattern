import "./index.css";

function ColorCard({ color }) {
  return (
    <div className="ColorCard">
      <div className="Color" style={{ backgroundColor: color }}></div>
      <div className="Paragraph" style={{ color: color }}>
        <p>{color}</p>
      </div>
    </div>
  );
}

export default ColorCard;
