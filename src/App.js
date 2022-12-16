import "./App.css";
import Barchart from "./components/barchart";
import { useState } from "react";
import Sidebar from "./components/sidebar.js";

function App() {
  const [values, setValues] = useState([10, 20, 30]);

  const data = {
    labels: ["Easy", "Medium", "Hard"],
    datasets: [
      {
        data: values,
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgb(54, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Sidebar values={values} valueChangehandler={(value) => setValues(value)} />
      <div className="card-box">
        <div className="card">
          <Barchart data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
