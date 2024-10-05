import React from 'react'
import './App.css';
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
function App() {
  return (
    <div className="app-container">
        <header className="app-header flex justify-between">
            {/*Location select*/}
            <i><CiLocationOn size={28}/></i>
            <p>Moon Chart</p>
            <i><SlCalender size={28} /></i>
        </header>
    </div>
  );
}

export default App;
