import React, { useState } from "react";

const Task1 = () => {
  const [text, setText] = useState("Any text");

  const inputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <p>{text}</p>
      <input type="text" value={text} onChange={inputChange} />
    </div>
  );
};

export default Task1;
