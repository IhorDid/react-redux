import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { deposit } from "./redux/store";

function App() {
  const dispatch = useDispatch();
  //  використовуємо  даний селектор там де використовуємо цей стан, тобто повторюється в інших компонентах
  const balance = useSelector((state) => state.balance.value);
  return (
    <div>
      <p>Balance: {balance}</p>
      <button onClick={() => dispatch(deposit(10))}>Deposit 10 credits</button>
    </div>
  );
}

export default App;
