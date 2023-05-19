import React, { useState } from "react";

import s from "./AddTodo.module.css";
import { Row, Col, Button, FormControl } from "react-bootstrap";

function AddTodo({ todo, setTodo }) {
  const [value, setValue] = useState("");

  function saveTodo() {
    setTodo([
      ...todo,
      {
        id: 4,
        title: value,
        status: true,
      },
    ]);
    setValue("");
  }

  return (
    <Row>
      <Col className={s.addTodoForm}>
        <FormControl
          placeholder="Введите задачу"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={saveTodo} className={s.btn}>
          Сохранить
        </Button>
      </Col>
    </Row>
  );
}
export default AddTodo;
