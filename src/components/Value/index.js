import React from "react";

const Value = ({ value, getMinutes, getSeconds }) => {
  return (
    <p className="pomodoro__value">
      {getMinutes(value)}:{getSeconds(value)}
    </p>
  );
};

export default Value;
