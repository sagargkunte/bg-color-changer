import { useState } from "react";


function App() {
  const [color,setColor] = useState("white");
  const colorSet = (col) => setColor(col);
  const styles = {
    borderRadius:"10px",
    padding:"8px",
    border:"none",
    cursor:"pointer"
  }
  return (
    <div style={
      {
        backgroundColor:color, // Setting bg-color here
        height:"100%",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:"3rem"
      }
      } className="h-screen w-screen">
      <button onClick={() => setColor("green")} style={styles}>Green</button>
      <button onClick={() => setColor("red")} style={styles}>Red</button>
      <button onClick={() => setColor("black")} style={styles}>Black</button>
      <button onClick={() => setColor("grey")} style={styles}>Grey</button>
      <button onClick={() => setColor("orange")} style={styles}>Orange</button>
      <button onClick={() => colorSet("blue")} style={styles}>Blue</button> {/* This method is tried my me just for fun */ }
    </div>
  );
}

export default App;