import React from "react";
import { useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <section>
      {isLoading && <div>...Loading</div>}
      {error && <div>!!!ERROR!!!</div>}
      {users.length > 0 &&
        users.map((u, id) => {
          return <article key={id}>{JSON.stringify(u)}</article>;
        })}
    </section>
  );
};

export default UserList;
