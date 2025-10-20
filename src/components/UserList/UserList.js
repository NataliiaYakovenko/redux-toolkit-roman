import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../store/slices/usersSlice";

const UserList = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

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
