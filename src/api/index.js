import axios from "axios";

export const getUsers = async () =>
  await axios.get("htttps://jsonplaceholder.typicode.com/users");
