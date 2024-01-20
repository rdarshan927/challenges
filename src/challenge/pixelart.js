import React, {useState} from 'react';
import Css3 from './css/pixelart.css'

export default function PixelArt() {
    const [color, setColor] = useState("gray");
    // const newPixels = [...pixels];
    return(
        <div>
            <h1>Pixel Art!</h1>
        </div>
    );
}