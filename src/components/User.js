import { use, useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count1] = useState(1);
  return (
    <div className="user-card p-4 m-4 bg-gray-50 rounded-lg">
      <h1>Count:{count}</h1>
      <h1>Count1:{count1}</h1>
      <h2>Name:{props.name}</h2>
      <h3>Location: Bangalore</h3>
      <h4>Contact: @Gaurav2090997</h4>
    </div>
  );
};
export default User;
