import React from "react";

interface StackProps {
  stack: string;
}

const Stack: React.FC<StackProps> = ({ stack }) => {
  return (
    <div
      className="relative mr-3 mt-2 rounded-md py-1 pr-1"
      style={{
        backgroundColor: "#1C3656",
        borderRadius: "30px",
      }}
    >
      <p className="mx-2 font-semibold" style={{ color: "#4EC1C5" }}>
        {stack}
      </p>
    </div>
  );
};

export default Stack;
