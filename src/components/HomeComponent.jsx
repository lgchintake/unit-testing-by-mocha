import React from "react";

export const HomeComponent = () => {
  const addition = (a, b) => {
    return a + b;
  };

  const getBox = () => {
    return <h1 class="heading">hello</h1>;
  };

  return (
    <div>
      <h1>Hello World!</h1>
      <span>
        Addition of 3 + 5 = <b>{addition(3, 5)}</b>
      </span>
    </div>
  );
};
