import React, { Component } from "react";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Main from "./components/main/main";
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
