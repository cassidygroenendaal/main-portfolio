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
            <p className="port-content__role">
              Full-Stack Development &#38; Database Managment
            </p>
            <p className="port-content__overview">
              Road Trip DJ creates a Spotify playlist for your road trip with musicians
              from the cities you’re traveling to and from. Discover new music, find local
              artists, and keep your long drives interesting with Road Trip DJ.
            </p>
            <div className="port-content__tools">
              <h5 className="port-content__tools-header">Tools</h5>
              <ul className="port-content__list-tools">
                <li>React</li>
                <li>Bootstrap</li>
                <li>Node</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>Passport</li>
                <li>Axios</li>
                <li>Google Maps API</li>
                <li>Spotify API</li>
                <li>WikiJS</li>
              </ul>
            </div>
          </PortInfo>
          <PortInfo
            title="Beacon"
            projectNum={2}
            imgURL="/images/project-thumbs/proj-13-beacon.png"
            siteURL="https://whispering-earth-16314.herokuapp.com/"
            repoURL="https://github.com/cassidygroenendaal/Beacon"
          >
            <p className="port-content__role">
              Full-Stack Development &#38; Project Management
            </p>
            <p className="port-content__overview">
              Beacon is a “meet-up” style app that allows users to create events called
              “beacons,” designed to help people make connections with like-minded
              individuals.
            </p>
            <div className="port-content__tools">
              <h5 className="port-content__tools-header">Tools</h5>
              <ul className="port-content__list-tools">
                <li>Bootstrap</li>
                <li>Handlebars</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>Passport</li>
                <li>Google Maps API</li>
              </ul>
            </div>
          </PortInfo>
          <PortInfo
            title="Gif Getter"
            projectNum={3}
            imgURL="/images/project-thumbs/proj-05-Giphy-API.PNG"
            siteURL="https://cassidygroenendaal.github.io/Gif-Getter/"
            repoURL="https://github.com/cassidygroenendaal/Gif-Getter"
          >
            <p className="port-content__role">Front-End Development</p>
            <p className="port-content__overview">
              This app lets you browse gifs from Giphy using dynamically created topic
              buttons. You can also favorite gifs for later viewing.
            </p>
            <div className="port-content__tools">
              <h5 className="port-content__tools-header">Tools</h5>
              <ul className="port-content__list-tools">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>AJAX</li>
              </ul>
            </div>
          </PortInfo>
          <PortInfo
            title="Bamazon"
            projectNum={4}
            imgURL="/images/project-thumbs/proj-10-bamazon.gif"
            repoURL="https://github.com/cassidygroenendaal/Bamazon"
          >
            <p className="port-content__role">
              Back-End Development &#38; Database Managment
            </p>
            <p className="port-content__overview">
              Bamazon is an Amazon style app that allows users to "shop" for items,
              managers to "stock" items, and supervisors to "create" store departments.
            </p>
            <div className="port-content__tools">
              <h5 className="port-content__tools-header">Tools</h5>
              <ul className="port-content__list-tools">
                <li>Node</li>
                <li>MySQL</li>
                <li>Inquirer</li>
              </ul>
            </div>
          </PortInfo>
          <PortInfo
            title="Event Hunter"
            projectNum={5}
            imgURL="/images/project-thumbs/proj-07-event-hunter.PNG"
            siteURL="https://cassidygroenendaal.github.io/Event-Hunter/"
            repoURL="https://github.com/cassidygroenendaal/Event-Hunter"
          >
            <p className="port-content__role">
              Front-End Development &#38; Project Management
            </p>
            <p className="port-content__overview">
              Event Hunter is an app that uses Ticketmaster to search for events and
              displays their location in Google Maps.
            </p>
            <div className="port-content__tools">
              <h5 className="port-content__tools-header">Tools</h5>
              <ul className="port-content__list-tools">
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>SASS/SCSS</li>
                <li>jQuery</li>
                <li>Google Maps API</li>
                <li>Ticketmaster API</li>
              </ul>
            </div>
          </PortInfo>
          <PortInfo
            title="Comic Scraper"
            projectNum={6}
            imgURL="/images/project-thumbs/proj-14-scraper.png"
            siteURL="https://agile-fortress-80352.herokuapp.com/"
            repoURL="https://github.com/cassidygroenendaal/Comic-Scraper"
          >
            <p className="port-content__role">
              Full-Stack Development &#38; Database Managment
            </p>
            <p className="port-content__overview">
              This app scrapes comic titles from a webcomic site and allows you to add
              personal notes to each comic, such as "Must read later!"
            </p>
            <div className="port-content__tools">
              <h5 className="port-content__tools-header">Tools</h5>
              <ul className="port-content__list-tools">
                <li>Handlebars</li>
                <li>Node</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>Axios</li>
                <li>Cheerio</li>
              </ul>
            </div>
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
