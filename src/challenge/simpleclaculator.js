import React, {useState} from "react";

export default function SimpleCalculator(){
    // const output = 0;
    function calculation() {
        if(sign === '+'){
            setOutput(num1 + num2);
        }
        else if(sign === '-') {
            setOutput(num1 - num2);
        }
        else if(sign === '/') {
            setOutput(num1 / num2);
        }
        else if(sign === '*') {
            setOutput(num1 * num2);
        }
        else {
            setOutput('Result ; Invalid');
        }
    }

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [sign, setSign] = useState('');
    const [output, setOutput] = useState('Result : ');
    console.log(output);
    return(
        <div className="container">
            <h1>Simple Calculator!</h1>
            <tr>
                <td><button onClick={() => setNum1(1)}>1</button></td>
                <td><button onClick={() => setNum1(2)}>2</button></td>
                <td><button onClick={() => setNum1(3)}>3</button></td>
                <td><button onClick={() => setNum1(4)}>4</button></td>
                <td><button onClick={() => setNum1(5)}>5</button></td>
                <td><button onClick={() => setNum1(6)}>6</button></td>
                <td><button onClick={() => setNum1(7)}>7</button></td>
                <td><button onClick={() => setNum1(8)}>8</button></td>
                <td><button onClick={() => setNum1(9)}>9</button></td>
            </tr>

            <tr>
                <td><button onClick={() => setNum2(1)}>1</button></td>
                <td><button onClick={() => setNum2(2)}>2</button></td>
                <td><button onClick={() => setNum2(3)}>3</button></td>
                <td><button onClick={() => setNum2(4)}>4</button></td>
                <td><button onClick={() => setNum2(5)}>5</button></td>
                <td><button onClick={() => setNum2(6)}>6</button></td>
                <td><button onClick={() => setNum2(7)}>7</button></td>
                <td><button onClick={() => setNum2(8)}>8</button></td>
                <td><button onClick={() => setNum2(9)}>9</button></td>
            </tr>

            <tr>
                <td><button onClick={() => setSign('+')}>+</button></td>
                <td><button onClick={() => setSign('-')}>-</button></td>
                <td><button onClick={() => setSign('/')}>/</button></td>
                <td><button onClick={() => setSign('*')}>*</button></td>
            </tr>
            <button onClick={calculation()}>Find</button>

            <div>
                <span>{output}</span>
            </div>
        </div>
    );
}