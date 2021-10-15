import React from 'react';

import PortInfo from '../../components/PortfolioInfo';

const PortfolioContent = ({ onCloseClick }) => {
  const psrImageUrls = [
    {
      url : '/images/project-thumbs/pop-star-runner-1.png'
    },
    {
      url : '/images/project-thumbs/pop-star-runner-2.png'
    }
  ];

  const acnhImageUrls = [
    {
      url       : '/images/project-thumbs/acnh-desktop.png',
      flexBasis : 230
    },
    {
      url : '/images/project-thumbs/acnh-mobile.jpg'
    }
  ];

  return (
    <div className='row no-gutters port-content'>
      <div>
        <PortInfo
          title='Bank of America'
          projectNum={1}
          imgURL='/images/project-thumbs/bank-of-america.jpg'
        >
          <p className='port-content__role'>Full-Stack Developer</p>
          <p className='port-content__overview'>
            Bank of America uses a custom framework to build and manage their websites
            internally. My team was responsible for building content management (CMS)
            tools that interfaced with the framework so that developers could create and
            update content for existing Bank of America websites. I also contributed to
            migrating CMS funtionality from their older software into a modern web
            application.
          </p>
          <div className='port-content__tools'>
            <h5 className='port-content__tools-header'>Tools</h5>
            <ul className='port-content__list-tools'>
              <li>React</li>
              <li>Blueprint JS</li>
              <li>MySQL</li>
              <li>Sequelize</li>
              <li>MobX</li>
              <li>Jest &#38; Sinon</li>
              <li>Jest</li>
            </ul>
          </div>
        </PortInfo>
        <PortInfo
          title='Game Development'
          projectNum={2}
          imgURL='/images/project-thumbs/wdg-clip.gif'
        >
          <p className='port-content__role'>
            Developer, Game Designer, &#38; Asset Artist
          </p>
          <p className='port-content__overview'>
            This is an unnamed action-platformer that I have been collaborating on since
            June, 2021. I am the sole programmer and primary artist, creating assets
            such as character designs and animations. While this project is in early
            development, I've learned a lot from the process and am excited about future
            development.
          </p>
          <p className='port-content__overview' />
          <div className='port-content__tools'>
            <h5 className='port-content__tools-header'>Tools</h5>
            <ul className='port-content__list-tools'>
              <li>C#</li>
              <li>Unity</li>
              <li>Clip Studio Paint</li>
              <li>Aseprite</li>
            </ul>
          </div>
        </PortInfo>
        <PortInfo
          title='Pop Star Runner'
          projectNum={3}
          imgURLs={psrImageUrls}
          siteURL='https://rainydayatelier.itch.io/pop-star-runner'
        >
          <p className='port-content__role'>
            Developer, Game Designer, &#38; Environment Artist
          </p>
          <p className='port-content__overview'>
            <em>Pop Star Runner</em> is a game that I collaborated for a 9-day game jame
            in early 2021. The objective was to create an entire game from concept to
            build in that time frame.
          </p>
          <p className='port-content__overview'>
            I worked as the sole programmer on a 2 person team for this game jam. I also
            created the environment art and contributed to the overall game design.
          </p>
          <div className='port-content__tools'>
            <h5 className='port-content__tools-header'>Tools</h5>
            <ul className='port-content__list-tools'>
              <li>C#</li>
              <li>Unity</li>
              <li>Aseprite</li>
            </ul>
          </div>
        </PortInfo>
        <PortInfo
          title='ACNH Collecting Guide'
          projectNum={4}
          imgURLs={acnhImageUrls}
          siteURL='https://cassidygroenendaal.github.io/acnh-collecting-guide/'
          repoURL='https://github.com/cassidygroenendaal/acnh-collecting-guide'
        >
          <p className='port-content__role'>Front-End Developer</p>
          <p className='port-content__overview'>
            This app shows you a list of fish & bugs you can catch in the new{' '}
            <em>Animal Crossing: New Horizons</em> based on your real world location
            (southern or northern hemisphere) and the current date & time. This
            application also implements lazy image loading for item icons.
          </p>
          <div className='port-content__tools'>
            <h5 className='port-content__tools-header'>Tools</h5>
            <ul className='port-content__list-tools'>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6)</li>
              <li>jQuery</li>
              <li>HTML5 Geolocation API</li>
            </ul>
          </div>
        </PortInfo>
        <PortInfo
          title='Road Trip DJ'
          projectNum={5}
          imgURL='/images/project-thumbs/RTDJ.png'
          repoURL='https://github.com/cassidygroenendaal/RoadTripDJ'
        >
          <p className='port-content__role'>
            Full-Stack Developer &#38; Database Manager
          </p>
          <p className='port-content__overview'>
            Road Trip DJ creates a Spotify playlist for your road trip with musicians from
            the cities you’re traveling to and from. Discover new music, find local
            artists, and keep your long drives interesting with Road Trip DJ.
          </p>
          <p className='port-content__overview'>
            In order to create the playlist, this app features a multi-step algorithm that
            combines Google Maps API, WikiJS, and Spotify’s API to generate the final
            playlist. First, the user’s start and end points are converted into latitude
            and longitude using Google API. Those locations are then compared against 265
            cities to find the five closest cities to each point which are then matched to
            artists pulled from WikiJS. Lastly, the artists are matched against Spotify’s
            API in order to populate a newly created playlist in the user’s account.
          </p>
          <div className='port-content__tools'>
            <h5 className='port-content__tools-header'>Tools</h5>
            <ul className='port-content__list-tools'>
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
              <li>Wiki JS</li>
            </ul>
          </div>
        </PortInfo>
        <PortInfo
          title='Event Hunter'
          projectNum={6}
          imgURL='/images/project-thumbs/Event-Hunter.PNG'
          repoURL='https://github.com/cassidygroenendaal/Event-Hunter'
        >
          <p className='port-content__role'>Front-End Developer &#38; Project Manager</p>
          <p className='port-content__overview'>
            Event Hunter allows users to search for events near them using the
            Ticketmaster API and the Google Maps API. Using the search bar, users can find
            events related to the query and view information about the event’s date, time,
            location, expected weather, additional information, and links to purchase
            tickets. As an added bonus, the app has a day and night mode toggle that
            changes the global theme of the website.
          </p>
          <div className='port-content__tools'>
            <h5 className='port-content__tools-header'>Tools</h5>
            <ul className='port-content__list-tools'>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Bootstrap</li>
              <li>SASS/SCSS</li>
              <li>jQuery</li>
              <li>Google Maps API</li>
              <li>Ticketmaster API</li>
            </ul>
          </div>
        </PortInfo>
      </div>
      <button className='close-button' onClick={onCloseClick}>
        <i className='fas fa-times' />
        <span>Close</span>
      </button>
    </div>
  );
};

export default PortfolioContent;
