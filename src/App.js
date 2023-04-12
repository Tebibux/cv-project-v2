import React, { Component } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/main";
import "./style/style.css";

class App extends Component {
  // constructor() {
  //   super();
  // };
  // previewImage = (e) => {
  //   let fileInput = document.getElementById('image-selection');
  //   fileInput.style.display = 'none';
  //   console.log(fileInput)
  // }
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
