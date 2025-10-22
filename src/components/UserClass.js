import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy Location",
        avatar_url: "https://Dummy-imge.com",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/gaurav290997");
    const json = await data.json();

    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log(" component did update");
  }

  componentWillUnmount() {
    console.log("Component will mount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact: @Gaurav2090997</h4>
      </div>
    );
  }
}

export default UserClass;
