import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Link from "./Link";
function App() {
  // state 沒有帶參數型別會自動推論為 undefined
  // const [content, setContent] = useState();

  // 泛型 state
  // state 既可以是數字也可以是字串
  // const [content, setContent] = useState<string | number>("");

  // 如果 () 裡面沒有加入"" 一樣會出錯
  // 因為空的代表是 undefined 會被 TS 認定為 string | undefined
  const [content, setContent] = useState<string>("");

  // 如果 state 是 物件時
  type Device = {
    CPU: string;
    RAM: string;
  };
  const [device, setDevice] = useState<Device>();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link content={content} />
      </header>
    </div>
  );
}

export default App;
