import React from "react";
import "./App.css";
import Switch from "./components/Switch";
import { useState } from "react";

function App() {
    const [switch1, setSwitch1] = useState(false);
    const [switch2, setSwitch2] = useState(false);
    const [switch3, setSwitch3] = useState(false);
    return (
        <div className="App">
            <Switch
                switch1={switch1}
                setSwitch1={setSwitch1}
                switch2={switch2}
                setSwitch2={setSwitch2}
                switch3={switch3}
                setSwitch3={setSwitch3}
            />
        </div>
    );
}

export default App;
