import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar";

function App() {
  const [text, setText] = useState("");
  const [getNavValue, setNavValue] = useState("");
  const changeNavValue = () => {
    setNavValue("APA");
  };
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar navValue={getNavValue} />
        {text == "ibra" ? <img src={logo} className="App-logo" alt="logo" /> : ""}
        <h5>{text}</h5>
        <input type="text" className="text" placeholder="type here!" onChange={(typing) => setText(typing.target.value)} />
        <button onClick={() => changeNavValue()} style={{ marginTop: 15, padding: 10, borderRadius: 15 }}>
          Ubah Navigasi
        </button>
      </header>
    </div>
  );
}

export default App;
