import React, {memo} from "react";

const Child = ({name,age}) => {
    console.log('π€·ββοΈμλ μ»΄ν¬λνΈκ° λ λλ§μ΄ λμμ΄μ')
  return (
    <div style={{ border: "2px solid purple", padding: "10px" }}>
      <h1>π μλ</h1>
        <p>name: {name}</p>
        <p>age: {age}</p>
    </div>
  );
};

export default memo(Child);
