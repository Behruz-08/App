import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function User({ users }) {
  const { id } = useParams();
  const [incomingUser, setIncomingUser] = useState({});

  useEffect(() => {
    if (!users) return;
    setIncomingUser(
      users.find((user) => {
        return user.id == id;
      })
    );
  }, [id]);
  console.log(incomingUser);
  return (
    <div
      style={{
        backgroundColor: "greenyellow",
        width: "400px",
        height: "350px",
        margin: "100px",
        marginLeft: "350px",

        textAlign: "center",

        scrollbarColor: "revert",
      }}
    >
      {incomingUser && incomingUser.info}
      <h4>{incomingUser.name}</h4>
      <h6>{incomingUser.age}</h6>
      <h6>{incomingUser.profession} </h6>
      <h6 style={{ marginTop: "200px" }}>{incomingUser.content}</h6>
    </div>
  );
}
