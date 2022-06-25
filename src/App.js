import "./styles.css";
import Search from "./Search";
import Display from "./Display";
import React, { useState } from "react";

export default function App() {
  const [word, setWord] = useState("");

  const handleSearch = (event) => {
    console.log(event.target.value);
    setWord(event.target.value);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Search handleSearch={handleSearch} />
      <Display word={word} />
    </div>
  );
}
