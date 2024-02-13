import { useState, useEffect } from "react";
import User from "../FetchUsers/User";
import "./FetchUsersDebounces.css";
import IndividualUser from "./IndividualUser";
export type UserType = {
  name: string;
  email: string;
  phone: string;
  id: string;
};
const FetchUsersDebounced = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [query, setQuery] = useState("");
  const [fetchedUser, setFetchedUser] = useState<UserType | null>(null);

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

  useEffect(() => {
    const abortController = new AbortController();
    const timerId = setTimeout(() => {
      const fetchIndvidiualUser = async () => {
        try {
          const result = await fetch(
            `https://jsonplaceholder.typicode.com/users?username=${query}`,
            { signal: abortController.signal }
          );
          const json = await result.json();
          console.log("Fetched json", json);
          const { name, email, id, phone } = json;
          setFetchedUser({ name, email, id, phone });
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          if (error.name === "AbortError") {
            console.log("Abort Error");
          } else {
            console.log("Error fetching user data", error);
          }
        }
      };

      fetchIndvidiualUser();
    }, 500);
    return () => {
      clearInterval(timerId);
      abortController.abort();
    };
  }, [query]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  return (
    <div>
      <div>
        <h1>{errorMsg ? errorMsg : null}</h1>
        <input type="text" onChange={handleInputChange} />
        <div className="users-container">
          {users.map((user) => (
            <User {...user} key={user.id} />
          ))}
        </div>
      </div>
      <div>{fetchedUser ? <IndividualUser {...fetchedUser} /> : null}</div>
    </div>
  );
};

export default FetchUsersDebounced;
