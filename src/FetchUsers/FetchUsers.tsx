import { useEffect } from "react";
import { useState } from "react";
import User from "./User";
import "./FetchUsers.css";

export type UserType = {
  name: string;
  email: string;
  phone: string;
  id: string;
};
const FetchUsers = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await res.json();
      const data = json.map((item: UserType) => {
        return {
          name: item.name,
          email: item.email,
          phone: item.phone,
          id: item.id,
        };
      });
      setUsers(data);
    } catch (error) {
      setErrorMsg("Oops!, Something went wrong!");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h1>{errorMsg ? errorMsg : null}</h1>

      <div className="users-container">
        {users.map((user) => (
          <User {...user} key={user.id} />
        ))}
      </div>
    </>
  );
};

export default FetchUsers;
