// import { useState } from "react";

function CoffeeSize({ cofSizVal, setCofSizVal }) {
  const handleSizeChange = (event) => {
    setCofSizVal(event.target.value);
  };

  return (
    <div>
      <h2>Select coffee size</h2>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="sm"
          checked={cofSizVal === "sm"}
          onChange={handleSizeChange}
        />
        Small
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="md"
          checked={cofSizVal === "md"}
          onChange={handleSizeChange}
        />
        Medium
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="lg"
          checked={cofSizVal === "lg"}
          onChange={handleSizeChange}
        />
        Large
      </label>
    </div>
  );
}

export default CoffeeSize;
