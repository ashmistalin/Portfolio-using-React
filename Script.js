import React, { Component } from 'react';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'skills'
    };
  }

  handleTabClick = (tabName) => {
    this.setState({ activeTab: tabName });
  }

  render() {
    const { activeTab } = this.state;

    return (
      <div>
        <div className="tab">
          <p
            className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
            onClick={() => this.handleTabClick('skills')}
          >
            Skills
          </p>
          <p
            className={`tab-links ${activeTab === 'achievements' ? 'active-link' : ''}`}
            onClick={() => this.handleTabClick('achievements')}
          >
            Achievements
          </p>
          <p
            className={`tab-links ${activeTab === 'educational Profile' ? 'active-link' : ''}`}
            onClick={() => this.handleTabClick('educational Profile')}
          >
            Educational Profile
          </p>
        </div>
        <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
          <ul>
            <li><span>Programming knowledge</span><br/>Strong proficiency in HTML, CSS, and JavaScript</li>
            <li><span>Front End Frameworks</span><br/>Knowledge of popular front-end frameworks such as React, Angular, and Vue</li>
            <li><span>Non-Technical</span><br/>Excellent communication and collaboration skills</li>
          </ul>
        </div>
        <div className={`tab-contents ${activeTab === 'educational Profile' ? 'active-tab' : ''}`} id="educational Profile">
          <ul>
            <li><span>Bachelors</span><br/>B.E Computer Science Engineering at Saveetha Engineering College</li>
            <li><span>Higher Secondary</span><br/>at Ponjesly Public School</li>
            <li><span>High School</span><br/>at Ponjesly Public School</li>
          </ul>
        </div>
        <div className={`tab-contents ${activeTab === 'achievements' ? 'active-tab' : ''}`} id="achievements">
          <ul>
            <li><span>Team Projects</span><br/>Implemented a new version control system to streamline multiple projects and improve collaboration between teams.</li>
            <li><span>Optimized Website Performance</span><br/> Used best practices to ensure the website is performing optimally.</li>
            <li><span>Workshop</span><br/>Served as a workshop head to many.</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Tabs;
