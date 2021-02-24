import React, { useState } from "react";
import Button from "../../../UI/Button/Button";

const UserCard = (props) => {
  const { name, username, email, address, phone, website } = props;
  const [collapse, setCollapse] = useState(false);
  return (
    <div
      style={{
        border: "1px solid #61dbfb",
        margin: 4,
        padding: 7,
      }}
    >
      <h3>{name}</h3>
      <br />
      <span>UserName : {username}</span>
      <br />
      <span>Email : {email}</span>
      <br />
      <span>Phone : {phone}</span>
      <br />
      <Button
        value={(collapse ? "Hide" : "More") + " Details"}
        click={() => setCollapse(!collapse)}
      />
      {collapse && (
        <div
          style={{
            boxSizing: "content-box",
          }}
        >
          <span>website : {website}</span>
          <br />
          <span>
            address :{" "}
            {`${address.street} ${address.suite},${address.city} ${address.zipcode}`}
          </span>
        </div>
      )}
    </div>
  );
};

export default UserCard;
