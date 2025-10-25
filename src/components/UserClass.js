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
      <div className="flex flex-wrap user-card p-4 m-4 border border-solid border-black rounded-lg w-140 h-40">
        <img className="size-25" src={avatar_url} />
        <h2 className="p-2 m-2">
          Name:{<p className="font-bold flex flex-wrap">{name}</p>}
        </h2>
        <h3 className="p-2 m-2">
          Location:{<p className="font-bold flex flex-wrap">{location}</p>}
        </h3>
        <h4 className="p-2 m-2">
          Contact:{<p className="font-bold flex flex-wrap">@Gaurav2090997</p>}{" "}
        </h4>
      </div>
    );
  }
}

export default UserClass;
