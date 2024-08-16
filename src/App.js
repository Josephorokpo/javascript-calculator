import React, { useState } from 'react';
import Button from './components/Button';
import Display from './components/Display';
import './App.css';

function App() {
    const [expression, setExpression] = useState("");
    const [currentValue, setCurrentValue] = useState("0");

    const handleButtonClick = (value) => {
        if (/[0-9]/.test(value)) {
            setCurrentValue((prev) => (prev === "0" ? value : prev + value));
            setExpression((prev) => prev + value);
        } else if (/[\+\-\*\/]/.test(value)) {
            setExpression((prev) => prev + " " + value + " ");
            setCurrentValue(value);
        } else if (value === "=") {
            try {
                const result = eval(expression);
                setCurrentValue(result.toString());
                setExpression(result.toString());
            } catch (error) {
                setCurrentValue("Error");
                setExpression("");
            }
        } else if (value === "C") {
            setCurrentValue("0");
            setExpression("");
        } else if (value === ".") {
            if (!currentValue.includes(".")) {
                setCurrentValue((prev) => prev + ".");
                setExpression((prev) => prev + ".");
            }
        }
    };

    return (
        <div className="calculator">
            <Display expression={expression} currentValue={currentValue} />
            <div className="buttons">
                <Button value="7" onClick={handleButtonClick} />
                <Button value="8" onClick={handleButtonClick} />
                <Button value="9" onClick={handleButtonClick} />
                <Button value="+" onClick={handleButtonClick} />
                <Button value="4" onClick={handleButtonClick} />
                <Button value="5" onClick={handleButtonClick} />
                <Button value="6" onClick={handleButtonClick} />
                <Button value="-" onClick={handleButtonClick} />
                <Button value="1" onClick={handleButtonClick} />
                <Button value="2" onClick={handleButtonClick} />
                <Button value="3" onClick={handleButtonClick} />
                <Button value="*" onClick={handleButtonClick} />
                <Button value="0" onClick={handleButtonClick} />
                <Button value="." onClick={handleButtonClick} />
                <Button value="=" onClick={handleButtonClick} />
                <Button value="/" onClick={handleButtonClick} />
                <Button value="C" onClick={handleButtonClick} />
            </div>
        </div>
    );
}

export default App;
