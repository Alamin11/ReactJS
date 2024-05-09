import react, { useState } from "react";

function ColorPicker() {
    const [color, setColor] = useState("#ffffff");
    function colorChangeHandler(event) {
        setColor(event.target.value);
    }
    return (
        <div className="color-picker-container">
            <h1 className="heading">Color picker</h1>
            <div className="color-container" style={{ backgroundColor: color }}>
                <p>Selected color: {color}</p>
            </div>
            <label>Select a color:</label>
            <input type="color" value={color} onChange={colorChangeHandler} />
        </div>
    );
}
export default ColorPicker