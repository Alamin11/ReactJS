import { useState } from "react";

function Objects() {
    const [car, setCar] = useState({ year: 2024, make: "Ford", model: "Mustang", });
    function yearChangeHandler(event) {
        setCar(c => ({ ...c, year: event.target.value }));
    }
    function makeChangeHandler(event) {
        setCar(c => ({ ...c, make: event.target.value }));
    }
    function modelChangeHandler(event) {
        setCar(c => ({ ...c, model: event.target.value }));
    }
    return (
        <>
            <p>My favorite car is {car.year} {car.make} {car.model} </p>
            <input type="number" value={car.year} onChange={yearChangeHandler} /><br />
            <input type="text" value={car.make} onChange={makeChangeHandler} /><br />
            <input type="text" value={car.model} onChange={modelChangeHandler} />
        </>
    );
}
export default Objects;