import React, { Component } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/main";
import "./style/style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: { text: '' },
      tasks: [],
    };
  }
  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
      }
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: '' },
    });
  };
  render() {
    return (
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>

    );
  }
}

export default App;
