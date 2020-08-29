import React from "react";

const Like = (props) => {
  return (
    <i
      onClick={props.onLike}
      className={props.liked ? "fa fa-heart" : "fa fa-heart-o"}
      style={{ cursor: "pointer" }}
    ></i>
  );
};

export default Like;
