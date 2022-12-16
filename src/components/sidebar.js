import React, { useState, useEffect } from "react";

const formArr = ["Easy", "Medium", "Hard"];

export default function Sidebar({ values, valueChangehandler }) {
  const [dataValues, setDataValues] = useState([]);
  useEffect(() => {
    setDataValues(values);
  }, [values]);

  const updateDataValues = (index, value) => {
    let newValues = [...dataValues];
    newValues[index] = value;
    setDataValues(newValues);
  };

  return (
    <div className="sidebar">
      <div style={{ marginTop: "4rem" }}>
        {formArr.map((item, index) => (
          <div className="sidebar-input-box" key={index}>
            <div>{item}</div>
            <input
              type="number"
              value={dataValues[index]}
              className="sidebar-input"
              onChange={(e) => updateDataValues(index, e.target.value)}
            />
          </div>
        ))}

        <button className="sidebar-apply-button" onClick={() => valueChangehandler(dataValues)}>
          Update
        </button>
      </div>
    </div>
  );
}
