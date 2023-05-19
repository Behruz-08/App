import { Link } from "react-router-dom";
// import React from "react";
const Home = () => {
  return (
    <div>
      <header>
        <Link to="/home">Home</Link>
        {/* <Link to="/Card">Cards</Link> */}
        <Link to="/TodoList">TodoList</Link>

        {/* <Link to="TodoList">TodoList</Link> */}
        {/* <Link to="/">Back</Link> */}
      </header>
      <button>
        <Link to="/">Back</Link>
      </button>
      <button>
        <Link to="TodoList">Тодолист</Link>
      </button>
      <button>
        <Link to="Shetchic">Счетчик</Link>
      </button>
      <button>
        <Link to="Card">Cards</Link>
      </button>
    </div>
  );
};

export { Home };
