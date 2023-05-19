import React from "react";
import s from "./Header.module.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Row>
        <Col>
          <div className={s.root}>Главная страница</div>
        </Col>
      </Row>

      <div
        className="btn btn-success"
        style={{
          marginTop: "-90px",
          backgroundColor: "indianred",
        }}
      >
        <button style={{ backgroundColor: "khaki" }}>
          <Link to="TodoList">Тодолист</Link>
        </button>
        <button style={{ backgroundColor: "khaki" }}>
          <Link to="Shetchic">Счетчик</Link>
        </button>
        <button style={{ backgroundColor: "khaki" }}>
          <Link to="/userList">Карты</Link>
        </button>
      </div>
    </div>
  );
}
export default Header;
