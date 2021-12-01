import react, { Component } from "react";
import "./components /child.css";
import Child from "./components /child";

class App extends Component {
  state = {
    title: "Parent Title",
  };
  changeTheTitle = (newTitle) => {
    this.setState({ title: newTitle });
  };
  render() {
    return (
      <div className="App">
        <Child
          ParentHandler={this.changeTheTitle.bind(this, "Child Title")}
          title={this.state.title}
        />
      </div>
    );
  }
}
export default App;
