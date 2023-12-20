import React, { useState } from "react";

import "./App.css";

import Register from "./register/register";
import Login from "./login/login";

function App() {
  const [onRegister, setOnRegister] = useState<boolean>(false)
  const openRegister = ():void => {
    setOnRegister(true);
  }
  const offRegister = ():void => {
    setOnRegister(false);
  }
  return (
    <div className="App">
      {onRegister ? <Register  offRegister={offRegister}/> :  <Login openRegister={openRegister}/>}
    </div>
  );
}

export default App;
