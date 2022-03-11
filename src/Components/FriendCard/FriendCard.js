import React from "react";
import Styled from "./FriendCard.module.css";

const FriendCard = (props) => {
  return (
    <div className={Styled.friendcard}>
      <div>
        <p>{props.name}</p>
        <p>Your friend</p>
      </div>
      <div className={Styled.star}>
        <p>Start</p>
      </div>
      <div className={Styled.star}>
        <p>Delete</p>
      </div>
    </div>
  );
};

export default FriendCard;
