import { useState } from "react";

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState("qqq");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>{inputValue}</p>
    </div>
  );
};
