import { useState } from "react";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { LangSwitcher } from "./components/LangSwitcher/LangSwitcher";
import CoffeeSize from "./components/CoffeeSize/CoffeeSize";
import { AcceptTerms } from "./components/AcceptTerms/AcceptTerms";
import "./App.css";

function App() {
  const handleSubmit = (userData) => {
    console.log(userData);
  };

  const [lang, setLang] = useState("uk");
  const [coffeeSize, setCoffeeSize] = useState("sm");
  const [hasAccepted, setHasAccepted] = useState(false);

  return (
    <div>
      <h1>Please login to your account!</h1>
      <LoginForm onLogin={handleSubmit} />
      <SearchBar />
      <p>Selected language</p>
      <LangSwitcher value={lang} setValue={setLang} />
      <CoffeeSize cofSizVal={coffeeSize} setCofSizVal={setCoffeeSize} />
      <AcceptTerms accept={hasAccepted} setAccept={setHasAccepted} />
    </div>
  );
}

export default App;
