import React from "react";
function Loading(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Loading;