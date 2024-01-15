import React, {useState} from 'react';
import Css3 from "./css/darkmode.css";

export default function Dark() {
    const [mode, setMode] = useState('dark');
    console.log(mode);
    return (
        <div className={`alignment ${mode}`}>
            <div><button onClick={() => setMode("dark")} className='darkButton'>Dark Mode</button></div>
            <div><button onClick={() => setMode("white")} className='whiteButton'>Light Mode</button></div>
        </div>
    )
}