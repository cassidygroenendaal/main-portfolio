import React, { Component } from "react";

import PortInfo from "../../components/PortfolioInfo";

class PortfolioContent extends Component {
  state = {};

  render() {
    return (
      <div className="row no-gutters port-content">
        <div>
          <PortInfo
            title="Road Trip DJ"
            projectNum={1}
						imgURL="/images/project-thumbs/proj-15-rtdj.png"
						siteURL="https://glacial-savannah-65289.herokuapp.com/"
						repoURL="https://github.com/Tim1986/RoadTripDJ"
          >
            <p>Here is some content</p>
          </PortInfo>
          <PortInfo
            title="Beacon"
            projectNum={2}
            imgURL="/images/project-thumbs/proj-13-beacon.png"
						siteURL="https://whispering-earth-16314.herokuapp.com/"
						repoURL="https://github.com/cassidygroenendaal/Beacon"
          >
            <p>Here is some content</p>
          </PortInfo>
          <PortInfo
            title="Giphy API"
            projectNum={3}
            imgURL="/images/project-thumbs/proj-05-Giphy-API.PNG"
						siteURL="https://cassidygroenendaal.github.io/Gif-Getter/"
						repoURL="https://github.com/cassidygroenendaal/Gif-Getter"
          >
            <p>Here is some content</p>
          </PortInfo>
          <PortInfo
            title="Bamazon"
            projectNum={4}
            imgURL="/images/project-thumbs/proj-10-bamazon.gif"
						repoURL="https://github.com/cassidygroenendaal/Bamazon"
          >
            <p>Here is some content</p>
          </PortInfo>
          <PortInfo
            title="Event Hunter"
            projectNum={5}
            imgURL="/images/project-thumbs/proj-07-event-hunter.PNG"
						siteURL="https://cassidygroenendaal.github.io/Event-Hunter/"
						repoURL="https://github.com/cassidygroenendaal/Event-Hunter"
          >
            <p>Here is some content</p>
          </PortInfo>
          <PortInfo
            title="Comic Scraper"
            projectNum={6}
            imgURL="/images/project-thumbs/proj-14-scraper.png"
						siteURL="https://cassidygroenendaal.github.io/Comic-Scraper/"
						repoURL="https://github.com/cassidygroenendaal/Comic-Scraper"
          >
            <p>Here is some content</p>
          </PortInfo>
        </div>
        <button className="close-button" onClick={this.props.onCloseClick}>
          <i className="fas fa-times" />
          <span>Close</span>
        </button>
      </div>
    );
  }
}

export default PortfolioContent;
