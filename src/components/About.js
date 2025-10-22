import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    return (
      <div className="about-container">
        <h1>About</h1>
        <h2>this Namaste react series</h2>
        <UserClass name={"first"} location={"Bangalore (class)"} />
      </div>
    );
  }
}

export default About;
