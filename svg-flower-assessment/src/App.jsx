import { useState } from "react";
import Flower from "./components/Flower";

function App() {
  const [petalColor, setPetalColor] = useState("#ff0000");
  const [centerColor, setCenterColor] = useState("#ffa500");
  const [radius, setRadius] = useState(20);
  const [petalCount, setPetalCount] = useState(5);

  const downloadSVG = () => {
    const svg = document.getElementById("flower-svg").outerHTML;
    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "flower.svg";
    a.click();
  };

  const handleReset = () => {
    setPetalColor("#ff0000");
    setCenterColor("#ffa500");
    setRadius(20);
    setPetalCount(5);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>SVG Flower Editor</h2>


      <div style={{ marginBottom: "20px" }}>
        <div>
          <label>Petal Color: </label>
          <input
            type="color"
            value={petalColor}
            onChange={(e) => setPetalColor(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Center Color: </label>
          <input
            type="color"
            value={centerColor}
            onChange={(e) => setCenterColor(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Petal Size: </label>
          <input
            type="range"
            min="10"
            max="40"
            value={radius}
            onChange={(e) => setRadius(Number(e.target.value))}
          />
          <span> {radius}</span>
        </div>

        <br />

        <div>
          <label>Petal Count: </label>
          <input
            type="range"
            min="3"
            max="12"
            value={petalCount}
            onChange={(e) => setPetalCount(Number(e.target.value))}
          />
          <span> {petalCount}</span>
        </div>

        <br />
        <button onClick={handleReset} style={{ marginRight: "10px" }}>
          Reset
        </button>

        <button onClick={downloadSVG}>
          Download SVG
        </button>
      </div>

      <Flower
        petalColor={petalColor}
        centerColor={centerColor}
        radius={radius}
        petalCount={petalCount}
      />
    </div>
  );
}

export default App;