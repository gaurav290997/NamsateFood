import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/userContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    return (
      <div className="about-container">
        <div className="flex">
          Logged in user:
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold px-2">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h1>About</h1>
        <h2>this Namaste react series</h2>
        <UserClass name={"first"} location={"Bangalore (class)"} />
      </div>
    );
  }
}

export default About;
