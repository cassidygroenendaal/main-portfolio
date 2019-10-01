import React, { Component } from "react";

import PortGrid from "../../components/PortfolioGrid";
import PortContent from "../../components/PortfolioContent";

class PortfolioSection extends Component {
  state = {
    currentItem: null,
    currentPos: -1,
    lockScroll: false,
    xscroll: null,
    yscroll: null,
    isClickLocked: false
  };

  getViewport = (axis) => {
    const docElem = window.document.documentElement;
    let client, inner;
    if (axis === "x") {
      client = docElem["clientWidth"];
      inner = window["innerWidth"];
    } else if (axis === "y") {
      client = docElem["clientHeight"];
      inner = window["innerHeight"];
    }

    return client < inner ? inner : client;
  };

  scrollX = () => {
    const docElem = window.document.documentElement;
    return window.pageXOffset || docElem.scrollLeft;
  };
  scrollY = () => {
    const docElem = window.document.documentElement;
    return window.pageYOffset || docElem.scrollTop;
  };

  noscroll = () => {
    if (!this.state.lockScroll) {
      this.setState({
        lockScroll: true,
        xscroll: this.scrollX(),
        yscroll: this.scrollY()
      });
    }
    window.scrollTo(this.state.xscroll, this.state.yscroll);
  };

  clickTile = (e) => {
    if (!this.state.isClickLocked) {
      e.preventDefault();
      //Save which tile was clicked
      this.setState({
        currentItem: e.currentTarget,
        currentPos: e.currentTarget.dataset.project,
        isClickLocked: true
      });
      //Give state a moment to update
      setTimeout(this.loadContent, 1);
    }
  };

  loadContent = () => {
    // -----------------------------------------------------
    // -------------- Grab elements and sizes --------------
    const main = document.querySelector(".main"),
      portfolio = document.querySelector(".portfolio");
    let tileOffsetTop =
        this.state.currentItem.closest(".port-tile").offsetTop + portfolio.offsetTop,
      currentRect = this.state.currentItem.getBoundingClientRect(),
      mainRect = main.getBoundingClientRect();
    // ----------------------------------------------------
    // -------------- Prevent Body Scrolling --------------
    document.querySelector("body").classList.add("noscroll");
    // ---------------------------------------------------
    // -------------- Animate White Overlay --------------
    let dummyOverlay = this.state.currentItem.querySelector(".port-item__dummy-overlay");
    dummyOverlay.classList.add("port-item__dummy-overlay--show");
    // --------------------------------------------------
    // -------------- Create dummy element --------------
    setTimeout(() => {
      let dummy = document.createElement("div");
      dummy.className = "port-content__placeholder";
      // Set size/position of dummy
      dummy.style.WebkitTransform = `
		translate3d(${currentRect.left}px,
			${tileOffsetTop}px, 0px)
			scale3d(${currentRect.width / mainRect.width},
			${currentRect.height / this.getViewport("y")}, 1)`;
      dummy.style.transform = `
			translate3d(${currentRect.left}px, 
				${tileOffsetTop}px, 0px) 
			scale3d(${currentRect.width / mainRect.width},
			${currentRect.height / this.getViewport("y")}, 1)`;
      // Add transition class
      dummy.classList.add("placeholder--trans-in");
      // Insert dummy after all portfolio grid items
      document.querySelector(".main").appendChild(dummy);
      // --------------------------------------------------
      // -------------- Expand dummy element --------------
      setTimeout(() => {
        // expands the placeholder
        dummy.style.WebkitTransform = "translate3d(0, " + this.scrollY() + "px, 0px)";
        dummy.style.transform = "translate3d(0, " + this.scrollY() + "px, 0px)";
        // disallow scroll
        // window.addEventListener('scroll', this.noscroll);
        // ------------------------------------------
        // -------------- Show Content --------------
        setTimeout(() => {
          //show content
          dummy.classList.remove("placeholder--trans-in");
          dummy.classList.add("placeholder--trans-out");
          document.querySelector(".port-content").classList.add("port-content--show");
          document
            .querySelector(`.port-content__item[data-project="${this.state.currentPos}"]`)
            .classList.add("port-content__item--show");
          document.querySelector(".close-button").classList.add("close-button--show");
        }, 600);
      }, 25);
    }, 300);
  };

  closeContent = () => {
    // -----------------------------------------------------
    // -------------- Grab elements and sizes --------------
    const main = document.querySelector(".main"),
      portfolio = document.querySelector(".portfolio"),
      dummy = document.querySelector(".port-content__placeholder");
    let tileOffsetTop =
        this.state.currentItem.closest(".port-tile").offsetTop + portfolio.offsetTop,
      currentRect = this.state.currentItem.getBoundingClientRect(),
      mainRect = main.getBoundingClientRect(),
      contentItem = document.querySelector(
        `.port-content__item[data-project="${this.state.currentPos}"]`
      );
    // ------------------------------------------
    // -------------- Hide content --------------
    contentItem.classList.remove("port-content__item--show");
    document.querySelector(".port-content").classList.remove("port-content--show");
    document.querySelector(".close-button").classList.remove("close-button--show");
    // --------------------------------------------------
    // -------------- Shrink Dummy Elemeny --------------
    setTimeout(() => {
      document.querySelector("body").classList.remove("noscroll");
      dummy.style.WebkitTransform = `
				translate3d(${currentRect.left}px, 
					${tileOffsetTop}px, 0px) 
				scale3d(${currentRect.width / mainRect.width}, 
					${currentRect.height / this.getViewport("y")}, 1)`;
      dummy.style.transform = `
					translate3d(${currentRect.left}px, 
						${tileOffsetTop}px, 0px) 
					scale3d(${currentRect.width / mainRect.width}, 
						${currentRect.height / this.getViewport("y")}, 1)`;
    }, 25);
    // ---------------------------------------------------
    // -------------- Animate White Overlay --------------
    setTimeout(() => {
      contentItem.scrollTop = 0;
      let dummyOverlay = this.state.currentItem.querySelector(
        ".port-item__dummy-overlay"
      );
      dummyOverlay.classList.remove("port-item__dummy-overlay--show");
      document.querySelector(".main").removeChild(dummy);
    }, 600);
    // -----------------------------------------
    // -------------- Reset State --------------
    setTimeout(() => {
      this.setState({
        currentItem: null,
        currentPos: -1,
        lockScroll: false,
        isClickLocked: false
      });
      // window.removeEventListener('scroll', this.noscroll);
    }, 700);
  };

  componentDidMount() {}

  render() {
    return (
      <div className="portfolio">
        <h1 className="display-4 mb-5">My Work</h1>
        <div className="port-main">
          <PortGrid onTileClick={this.clickTile} />
          <PortContent onCloseClick={this.closeContent} />
        </div>
      </div>
    );
  }
}

export default PortfolioSection;
