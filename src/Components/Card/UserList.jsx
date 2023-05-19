import React from "react";

import { Link } from "react-router-dom";

const UserList = ({ users }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "25px",
        justifyContent: "space-around",
      }}
    >
      {users.map((user) => (
        <div
          style={{
            border: "1px solid black",
            backgroundColor: "darkkhaki",
            textAlign: "center",

            width: "300px",
            height: "300px",
          }}
        >
          <h1>{user.name}</h1>
          <Link to={`/users/${user.id}`} key={user.id}>
            <div style={{ backgroundColor: "burlywood", marginTop: "170px" }}>
              <button style={{ backgroundColor: "chocolate" }}>
                Подробное
              </button>
            </div>
            <div style={{ padding: "10px" }}>
              <button className="btn btn-danger">
                <Link to="/">Back</Link>
              </button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default UserList;
