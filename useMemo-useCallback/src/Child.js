import React, {memo} from "react";

const Child = ({name,age}) => {
    console.log('🤷‍♀️자녀 컴포넌트가 렌더링이 되었어요')
  return (
    <div style={{ border: "2px solid purple", padding: "10px" }}>
      <h1>🖐 자녀</h1>
        <p>name: {name}</p>
        <p>age: {age}</p>
    </div>
  );
};

export default memo(Child);
