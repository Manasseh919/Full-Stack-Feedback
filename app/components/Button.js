import React from "react";

function Button(props) {
  return (
    <button
      {...props}
      className={
        "flex gap-2 items-center py-1 px-4 rounded-md text-opacity-90 " +
        (props.primary ? "bg-blue-500  text-white" : "text-gray-600 ")
      }
    />
  );
}

export default Button;
