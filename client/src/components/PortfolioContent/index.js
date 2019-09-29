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
            <p>
              Road Trip DJ creates a Spotify playlist for your road trip with musicians
              from the cities you’re traveling to and from. Discover new music, find local
              artists, and keep your long drives interesting with Road Trip DJ.
            </p>
          </PortInfo>
          <PortInfo
            title="Beacon"
            projectNum={2}
            imgURL="/images/project-thumbs/proj-13-beacon.png"
            siteURL="https://whispering-earth-16314.herokuapp.com/"
            repoURL="https://github.com/cassidygroenendaal/Beacon"
          >
            <p>
              Beacon is a “meet-up” style app that allows users to create events called
              “beacons,” designed to help people make connections with like-minded
              individuals.
            </p>
          </PortInfo>
          <PortInfo
            title="Gif Getter"
            projectNum={3}
            imgURL="/images/project-thumbs/proj-05-Giphy-API.PNG"
            siteURL="https://cassidygroenendaal.github.io/Gif-Getter/"
            repoURL="https://github.com/cassidygroenendaal/Gif-Getter"
          >
            <p>
              This app lets you browse gifs from Giphy using dynamically created topic
              buttons. You can also favorite gifs for later viewing.
            </p>
          </PortInfo>
          <PortInfo
            title="Bamazon"
            projectNum={4}
            imgURL="/images/project-thumbs/proj-10-bamazon.gif"
            repoURL="https://github.com/cassidygroenendaal/Bamazon"
          >
            <p>
              Bamazon is an Amazon style app that allows users to "shop" for items,
              managers to "stock" items, and supervisors to "create" store departments.
            </p>
          </PortInfo>
          <PortInfo
            title="Event Hunter"
            projectNum={5}
            imgURL="/images/project-thumbs/proj-07-event-hunter.PNG"
            siteURL="https://cassidygroenendaal.github.io/Event-Hunter/"
            repoURL="https://github.com/cassidygroenendaal/Event-Hunter"
          >
            <p>
              Event Hunter is an app that uses Ticketmaster to search for events and
              displays their location in Google Maps.
            </p>
          </PortInfo>
          <PortInfo
            title="Comic Scraper"
            projectNum={6}
            imgURL="/images/project-thumbs/proj-14-scraper.png"
            siteURL="https://cassidygroenendaal.github.io/Comic-Scraper/"
            repoURL="https://github.com/cassidygroenendaal/Comic-Scraper"
          >
            <p>
              This app scrapes comic titles from a webcomic site and allows you to add
              personal notes to each comic, such as "Must read later!"
            </p>
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
