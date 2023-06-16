import React, { memo } from "react";

const Button = ({ children, onClick, color }) => {
  return (
    <button
      onClick={onClick}
      style={{
        background:
          color === "red" ? "#F43434" : color === "blue" ? "#3497F4" : "#fff",
        outline: "none",
        border: 0,
        padding: "8px 15px",
        borderRadius: 10,
        color: color === "red" ? "#fff" : color === "blue" ? "#fff" : "#000",
        cursor: "pointer",
        fontSize: 20,
      }}
    >
      {children}
    </button>
  );
};

export default memo(Button);
