import "../RandomColorGenerator/random-color-generator.css";

export const RandomColorGenerator = ({
  color,
  onSelectType,
  onGenaretColor,
}) => {
  return (
    <div>
      <button onClick={() => onSelectType("hex")}>Create HEX color</button>
      <button onClick={() => onSelectType("rgb")}>Create RGB color</button>
      <button onClick={onGenaretColor}>Generate Random Color</button>
      <div className="container" style={{ backgroundColor: color.value }}>
        Hello Color {color.value}
      </div>
    </div>
  );
};
