// import { counter } from "@fortawesome/fontawesome-svg-core";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Schetchic() {
  const [Counter, setCounter] = useState(0);
  function increment() {
    setCounter(Counter + 1);
  }
  function decrement() {
    setCounter(Counter - 1);
  }
  return (
    <div>
      <h1>Счетчик:{Counter}</h1>
      <button onClick={increment} className="btn btn-success">
        Добавить
      </button>
      <button onClick={decrement} className="btn btn-danger">
        Убрать
      </button>
      <button className="btn btn-danger">
        <Link to="/">Back</Link>
      </button>
    </div>
  );
}
export default Schetchic;
