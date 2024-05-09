import { useState } from "react";

function Mybutton() {
    const [count, setCount] = useState(0);

    function handleClickIncrease() {
        setCount(count + 1);
    }
    function handleClickReset() {
        setCount(0);
    }
    function handleClickDecrease() {
        setCount(count - 1);
    }

    return (
        <div className="counter">
            <p className="counterText">Counter: {count}</p>
            <button onClick={handleClickIncrease} className="myBtn">increment {count}</button>
            <button onClick={handleClickReset} className="myBtn">reset</button>
            <button onClick={handleClickDecrease} className="myBtn">decrement {count}</button>
        </div>
    );
}
export default Mybutton