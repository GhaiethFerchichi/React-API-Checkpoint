import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard/UserCard";
import Spinner from "../../UI/Spinner/Spinner";

const UserList = () => {
  const [listOfUser, setListOfUser] = useState(null);

  useEffect(() => {
    const fetchUsers = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          setListOfUser(response.data);
        })
        .catch((err) => console.error(err));
    };
    fetchUsers();
  }, []);
  if (listOfUser == null) return <Spinner />;
  let listOfUserRender = listOfUser.map((user) => (
    <UserCard key={user.id} {...user} />
  ));

  return <>{listOfUserRender}</>;
};

export default UserList;
