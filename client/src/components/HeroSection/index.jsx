import React, { useState, useEffect } from 'react';

const HeroSection = props => {
  const [isWaiting, setIsWaiting] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [styleType, setStyleType] = useState('');

  const lineStyles = ['line--green', 'line--purple', 'line--blue'];
  const ballStyles = [
    'ball--green',
    'ball--purple',
    'ball--blue',
    'ball--outline-green',
    'ball--outline-purple',
    'ball--outline-blue'
  ];

  const createTrail = () => {
    // Create the trail element
    for (let i = 0; i < 10; i++) {
      let newTrailEl = document.createElement('div');
      newTrailEl.classList.add(styleType);

      // Add styles specific to the line trail
      if (styleType === 'line') {
        let randRotation = Math.floor(Math.random() * 360);
				let randRotationSpeed = Math.floor(Math.random() * 1000) + 500
        newTrailEl.style.transform = `
			rotate(${randRotation}deg)`;
        let randStyle = Math.floor(Math.random() * lineStyles.length);
        newTrailEl.animate(
          [
            { transform: `rotate(${randRotation}deg)`, opacity: 1 },
            { transform: `rotate(${randRotation + 100}deg)`, opacity: 0 }
          ],
          {
            duration : randRotationSpeed
          }
        );
        newTrailEl.classList.add(lineStyles[randStyle]);

        // Position the trail element
        let elemTop = mouseY - 50 / 2,
          elemLeft = mouseX - 2 / 2,
          offsetX = Math.random() * 300,
          offsetY = Math.random() * 300;
        newTrailEl.style.top = `${elemTop + offsetY}px`;
        newTrailEl.style.left = `${elemLeft + offsetX}px`;
      }

      // Add styles specific to the ball trail
      if (styleType === 'ball') {
        let size = Math.floor(Math.random() * 60);
        newTrailEl.style.width = `${size}px`;
        newTrailEl.style.height = `${size}px`;

        let randStyle = Math.floor(Math.random() * ballStyles.length);
        newTrailEl.classList.add(ballStyles[randStyle]);

        // Position the trail element
        let elemTop = mouseY - size / 2,
          elemLeft = mouseX - size / 2,
          offsetX = Math.random() * 300,
          offsetY = Math.random() * 300;
        newTrailEl.style.top = `${elemTop + offsetY}px`;
        newTrailEl.style.left = `${elemLeft + offsetX}px`;
				newTrailEl.style.animationDuration = `${Math.floor(Math.random() * 1500) + 500}ms`
      }

      // Append the trail element to the hero
      document.querySelector('.hero').appendChild(newTrailEl);

      // Wait until the animation ends, then remove the trail element
      setTimeout(() => {
        document.querySelector('.hero').removeChild(newTrailEl);
      }, 2002);
      setTimeout(() => {
        setIsWaiting(false);
      }, 150);
    }
  };

  const onMouseMove = e => {
    if (!isWaiting) {
      setMouseX(e.pageX);
      setMouseY(e.pageY);
      setIsWaiting(true);
      createTrail();
    }
  };

  useEffect(() => {
    // Choose between a line or a ball trail
    let randomStyle = Math.floor(Math.random() * 2);

    if (randomStyle === 0) {
      setStyleType('line');
    } else {
      setStyleType('ball');
    }
  }, []);

  return (
    <section className='hero' onMouseMove={onMouseMove}>
      <div className='hero__chevron'>
        <i className='fas fa-chevron-down' />
      </div>
      <div className='hero__contents h-100 d-flex align-items-center mx-5'>
        <div>
          <h1 className='hero__title text-left'>
            I'm <span className='hero__contents--green'>Cassidy Groenendaal</span>
          </h1>
          <h1 className='hero__title text-left'>
            I bring <span className='hero__contents--green'>art</span>{' '}
            <span className='hero__contents--purple'>+</span>{' '}
            <span className='hero__contents--blue'>code</span> together
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
