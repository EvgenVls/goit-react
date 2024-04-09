import { useState } from "react";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { LangSwitcher } from "./components/LangSwitcher/LangSwitcher";
import CoffeeSize from "./components/CoffeeSize/CoffeeSize";
import "./App.css";

function App() {
  const handleSubmit = (userData) => {
    console.log(userData);
  };

  const [lang, setLang] = useState("uk");
  const [coffeeSize, setCoffeeSize] = useState("sm");

  return (
    <div>
      <h1>Please login to your account!</h1>
      <LoginForm onLogin={handleSubmit} />
      <SearchBar />
      <p>Selected language</p>
      <LangSwitcher value={lang} setValue={setLang} />
      <CoffeeSize cofSizVal={coffeeSize} setCofSizVal={setCoffeeSize} />
    </div>
  );
}

export default App;
