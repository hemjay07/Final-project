import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="top">
        <button>connect wallet</button>
      </div>
      <div className="content">
        <div className="left-content">
          <div></div>
          <button>deposit</button>
          <button className="withdraw">withdraw</button>
        </div>

        <div className="right-content">
          <div></div>
          <button>setnum</button>
          <button className="getnum">getnum</button>
        </div>
      </div>
    </div>
  );
}

export default App;
