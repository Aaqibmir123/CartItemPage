
import { useState } from "react";
import Model from "../Ui/Model";
const Cart = (props) => {
  const [button,CloseButton]=useState();
  const cartItems = (
    <ul className="">
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Model>
      {cartItems}
      <div className="">
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className="">
        <button className="" onClick={props.onclose}>Close</button>
        <button className="">Order</button>
      </div>
    </Model>
  );
};

export default Cart;