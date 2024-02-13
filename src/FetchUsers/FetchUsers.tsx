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
  const [filteredUsers, setFilteredUsers] = useState<UserType[]>([]);

  const [errorMsg, setErrorMsg] = useState("");
  const [query, setQuery] = useState("");
  console.log("Query", query);
  let timerId: number;
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
      setFilteredUsers(data);
    } catch (error) {
      setErrorMsg("Oops!, Something went wrong!");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filterUsers = () => {
    const filteredData = users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredUsers(filteredData);
  };

  useEffect(() => {
    filterUsers();
  }, [query]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timerId) {
      clearInterval(timerId);
    }
    timerId = setTimeout(() => {
      setQuery(e.target.value);
    }, 500);
  };

  return (
    <>
      <h1>{errorMsg ? errorMsg : null}</h1>
      <input type="text" onChange={handleInputChange} />
      <div className="users-container">
        {filteredUsers.map((user) => (
          <User {...user} key={user.id} />
        ))}
      </div>
    </>
  );
};

export default FetchUsers;
