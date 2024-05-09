import React, { useState } from "react";

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState();
    const [shipping, setShipping] = useState("Delivery");

    function nameChangEventHandler(event) {
        setName(event.target.value);
    }
    function counterHandler(event) {
        setQuantity(event.target.value);
    }
    function handleComment(event) {
        setComment(event.target.value);
    }
    function paymentHandler(event) {
        setPayment(event.target.value);
    }
    function shippingHandler(event) {
        setShipping(event.target.value);
    }

    return (
        <div>
            <input type="text" value={name} placeholder="Enter name" onChange={nameChangEventHandler} />
            <p>Name: {name}</p>
            <input value={quantity} type="number" onChange={counterHandler} />
            <p>Quantity: {quantity}</p>
            <textarea type="textArea" value={comment} onChange={handleComment} placeholder="Your comment here" />
            <p>Comment: {comment}</p>
            <select name="PaymentMethod" id="" value={payment} onChange={paymentHandler}>
                <option value="">Select payment method</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Paypal">Paypal</option>
            </select>
            <p>Payment Method: {payment}</p>

            <label htmlFor="">
                <input type="radio" value={"pick Up"}
                    checked={shipping === "pick Up"} onChange={shippingHandler} />
                PickUp
            </label>
            <label htmlFor="">
                <input type="radio" value={"Delivery"}
                    checked={shipping === "Delivery"} onChange={shippingHandler} />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>

        </div>
    );
}
export default MyComponent