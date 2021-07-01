import React, { useState, useEffect } from 'react';

import { PortfolioGrid, PortfolioContent } from '../';

const PortfolioSection = () => {
  const [currentItem, setCurrentItem] = useState(null);
  const [currentPos, setCurrentPos] = useState(-1);
  const [isClickLocked, setIsClickLocked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ----------------------------------------------------------------
  // For the currently unused noscroll function
  // ----------------------------------------------------------------
  // const [isScrollLocked, setIsScrollLocked] = useState(false);
  // const [xScroll, setXScroll] = useState(null);
  // const [yScroll, setYScroll] = useState(null);

  // const scrollX = () => {
  //   const docElem = window.document.documentElement;
  //   return window.pageXOffset || docElem.scrollLeft;
  // };

  // const noscroll = () => {
  //   if (!isScrollLocked) {
  //     setIsScrollLocked(true);
  //     setXScroll(scrollX());
  //     setYScroll(scrollY());
  //   }
  //   window.scrollTo(xScroll, yScroll);
  // };
  // ----------------------------------------------------------------

  const getViewport = axis => {
    const docElem = window.document.documentElement;
    let client, inner;
    if (axis === 'x') {
      client = docElem['clientWidth'];
      inner = window['innerWidth'];
    } else if (axis === 'y') {
      client = docElem['clientHeight'];
      inner = window['innerHeight'];
    }

    return client < inner ? inner : client;
  };

  const scrollY = () => {
    const docElem = window.document.documentElement;
    return window.pageYOffset || docElem.scrollTop;
  };

  const clickTile = e => {
    if (!isClickLocked) {
      e.preventDefault();

      //Save which tile was clicked
      setCurrentItem(e.currentTarget);
      setCurrentPos(e.currentTarget.dataset.project);
      setIsClickLocked(true);
    }
  };

  const loadContent = () => {
    // -----------------------------------------------------
    // -------------- Grab elements and sizes --------------
    const main = document.querySelector('.main'),
      portfolio = document.querySelector('.portfolio');

    let tileOffsetTop = currentItem.closest('.port-tile').offsetTop + portfolio.offsetTop,
      currentRect = currentItem.getBoundingClientRect(),
      mainRect = main.getBoundingClientRect();
    // ----------------------------------------------------
    // -------------- Prevent Body Scrolling --------------
    document.querySelector('body').classList.add('noscroll');
    // ---------------------------------------------------
    // -------------- Animate White Overlay --------------
    let dummyOverlay = currentItem.querySelector('.port-item__dummy-overlay');
    dummyOverlay.classList.add('port-item__dummy-overlay--show');

    // --------------------------------------------------
    // -------------- Create dummy element --------------
    setTimeout(() => {
      let dummy = document.createElement('div');
      dummy.className = 'port-content__placeholder';
      // Set size/position of dummy
      dummy.style.WebkitTransform = `
		translate3d(${currentRect.left}px,
			${tileOffsetTop}px, 0px)
			scale3d(${currentRect.width / mainRect.width},
			${currentRect.height / getViewport('y')}, 1)`;
      dummy.style.transform = `
			translate3d(${currentRect.left}px, 
				${tileOffsetTop}px, 0px) 
			scale3d(${currentRect.width / mainRect.width},
			${currentRect.height / getViewport('y')}, 1)`;

      // Add transition class
      dummy.classList.add('placeholder--trans-in');
      // Insert dummy after all portfolio grid items
      document.querySelector('.main').appendChild(dummy);

      // --------------------------------------------------
      // -------------- Expand dummy element --------------
      setTimeout(() => {
        // expands the placeholder
        dummy.style.WebkitTransform = 'translate3d(0, ' + scrollY() + 'px, 0px)';
        dummy.style.transform = 'translate3d(0, ' + scrollY() + 'px, 0px)';
        // disallow scroll
        // window.addEventListener('scroll', noscroll);

        // ------------------------------------------
        // -------------- Show Content --------------
        setTimeout(() => {
          //show content
          dummy.classList.remove('placeholder--trans-in');
          dummy.classList.add('placeholder--trans-out');
          document.querySelector('.port-content').classList.add('port-content--show');
          document
            .querySelector(`.port-content__item[data-project="${currentPos}"]`)
            .classList.add('port-content__item--show');
          document.querySelector('.close-button').classList.add('close-button--show');
          //=========================================================================================
          //=========================================================================================
          window.history.pushState('forward', null, '');
          setIsModalOpen(true);
        }, 600);
      }, 25);
    }, 300);
  };

  const closeContent = () => {
    // -----------------------------------------------------
    // -------------- Grab elements and sizes --------------
    const main = document.querySelector('.main'),
      portfolio = document.querySelector('.portfolio'),
      dummy = document.querySelector('.port-content__placeholder');

    let tileOffsetTop = currentItem.closest('.port-tile').offsetTop + portfolio.offsetTop,
      currentRect = currentItem.getBoundingClientRect(),
      mainRect = main.getBoundingClientRect(),
      contentItem = document.querySelector(
        `.port-content__item[data-project="${currentPos}"]`
      );

    // ------------------------------------------
    // -------------- Hide content -------------
    //=========================================================================================
    //=========================================================================================-
    setIsModalOpen(false);
    contentItem.classList.remove('port-content__item--show');
    document.querySelector('.port-content').classList.remove('port-content--show');
    document.querySelector('.close-button').classList.remove('close-button--show');

    // --------------------------------------------------
    // -------------- Shrink Dummy Elemeny --------------
    setTimeout(() => {
      document.querySelector('body').classList.remove('noscroll');
      dummy.style.WebkitTransform = `
				translate3d(${currentRect.left}px, 
					${tileOffsetTop}px, 0px) 
				scale3d(${currentRect.width / mainRect.width}, 
					${currentRect.height / getViewport('y')}, 1)`;
      dummy.style.transform = `
					translate3d(${currentRect.left}px, 
						${tileOffsetTop}px, 0px) 
            scale3d(${currentRect.width / mainRect.width}, 
              ${currentRect.height / getViewport('y')}, 1)`;
    }, 25);

    // ---------------------------------------------------
    // -------------- Animate White Overlay --------------
    setTimeout(() => {
      contentItem.scrollTop = 0;
      let dummyOverlay = currentItem.querySelector('.port-item__dummy-overlay');
      dummyOverlay.classList.remove('port-item__dummy-overlay--show');
      main.removeChild(dummy);
    }, 600);

    // -----------------------------------------
    // -------------- Reset State --------------
    setTimeout(() => {
      setCurrentItem(null);
      setCurrentPos(-1);
      setIsClickLocked(false);

      // window.removeEventListener('scroll', noscroll);
    }, 700);
  };

  const handleBackClick = () => {
    if (isModalOpen) closeContent();
  };

  // If the back button is clicked while the modal is open,
  // Close the content/modal
  useEffect(() => {
    window.addEventListener('popstate', handleBackClick);
    return () => window.removeEventListener('popstate', handleBackClick);
  });

  // Load Content when currentItem is updated
  useEffect(
    () => {
      if (currentItem != null) loadContent();
    },
    // eslint-disable-next-line
    [currentItem]
  );

  return (
    <div className='portfolio'>
      <h1 className='mb-5 port-main__title'>My Work</h1>
      <div className='port-main'>
        <PortfolioGrid onTileClick={clickTile} />
        <PortfolioContent onCloseClick={closeContent} />
      </div>
    </div>
  );
};

export default PortfolioSection;
