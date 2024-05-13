import React from "react";

const MapTest = () => {
  const fruits = ["a", "b", "c"];
  return (
    <div>
      <h2>알파벳</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default MapTest;
