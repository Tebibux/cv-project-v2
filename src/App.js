import React, { Component } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/main";
import "./style/style.css";

class App extends Component {
  constructor() {
    super();

  };
  render() {
    return (
      <div className="container">
        <Header />
        <div className="main">
          {/* profile starts Here */}
          <div className="profile">
            <div className="userProfile">
              <div className="image">
                <input type="file" name="userImage"
                  accept="image/png, image/gif, image/jpeg" />
                {/* Add placeholder here for the image */}
              </div>
              <div className="disc">
                <input type="text" name="userName" placeholder="Your Name" />
                <input type="text" name="userBio" placeholder="Small bio about yourself here" />
              </div>
            </div>
            <div className="userAddress">
              <form >
                <input type="tel" name="userPhone" placeholder="You'r Phone Here" />
                <input type="text" name="userLocation" placeholder="Your current location here" />
                <input type="email" name="userEmail" placeholder="Your email here" />
                <input type="url" name="linkedIn" placeholder="Your linkedIn here" />
              </form>
            </div>
          </div>
          {/* profile ends Here */}

          {/* Education states here */}
          <div className="userEducation">
            <div className="title">Education</div>
            <ul className="educations">
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nam beatae numquam, </li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nam beatae numquam, </li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nam beatae numquam, </li>
            </ul>
            <div className="user-education-dic" >
              <input type="text" name="education" placeholder="Add your Educations here" />
              <button className="btn-add">Add</button>
            </div>
          </div>
          {/* education ends Here */}

          {/* experience starts Here */}
          <div className="userExperience">
            <div className="title">Experience</div>
            <ul>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nam beatae numquam, </li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nam beatae numquam, </li>
            </ul>
            <div className="user-experience-dic" >
              <input type="text" name="userExperience" placeholder="Add your Experience here" />
              <button className="btn-add">Add</button>
            </div>
          </div>
          {/* experience ends Here */}
          {/* skill starts Here */}
          <div className="userSkill">
            <div className="title">Skill</div>
            <ul>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nam beatae numquam, </li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nam beatae numquam, </li>
            </ul>
            <div className="user-skill-dic" >
              <input type="text" name="userSkill" placeholder="Add your skills here" />
              <button className="btn-add">Add</button>
            </div>
          </div>
          {/* skill ends Here */}
        </div>
        <Footer />
      </div>

    );
  }
}

export default App;
