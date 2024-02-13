import { type UserType } from "./FetchUsers";

const User = ({ name, email, phone }: UserType) => {
  return (
    <section className="user-container">
      <h1>{name}</h1>
      <h2>{email}</h2>
      <h3>{phone}</h3>
    </section>
  );
};

export default User;
