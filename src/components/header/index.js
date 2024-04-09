import React from "react";

export function Header({ title }) {
  return (
    <>
      <div>
        <h1
          style={{
            color: "transparent",
            "-webkit-text-stroke": "2px white",
            fontSize: 54,
            position:"absolute",
            right:400
          }}
        >
          {title}
        </h1>
      </div>

      <div>
        <h1  className="animation" style={{
         color: "white",
         fontSize: 54,
         position:"absolute",
         right:400,
         animation: 'animate 4s ease-in-out infinite',
          }}>
          {title}
        </h1>
      </div>
    </>
  );
}
