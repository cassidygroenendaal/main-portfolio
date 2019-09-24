import React, { Component } from 'react';

class HeroSection extends Component {
	state = {
		isWaiting  : false,
		mouseX     : 0,
		mouseY     : 0,
		styleType  : '',
		lineStyles : [
			'line--green',
			'line--purple',
			'line--blue'
		],
		ballStyles : [
			'ball--green',
			'ball--purple',
			'ball--blue',
			'ball--outline-green',
			'ball--outline-purple',
			'ball--outline-blue'
		]
	};

	createTrail = () => {
		// Create the trail element
		for (let i = 0; i < 10; i++) {
			let newTrailEl = document.createElement('div');
			newTrailEl.classList.add(this.state.styleType);

			// Add styles specific to the line trail
			if (this.state.styleType === 'line') {
				let randRotation = Math.floor(Math.random() * 360);
				newTrailEl.style.transform = `
			rotate(${randRotation}deg)`;
				let randStyle = Math.floor(
					Math.random() * this.state.lineStyles.length
				);
				newTrailEl.animate(
					[
						{ transform: `rotate(${randRotation}deg)` },
						{ transform: `rotate(${randRotation + 100}deg)` }
					],
					{
						duration : 1000
					}
				);
				newTrailEl.classList.add(this.state.lineStyles[randStyle]);

				// Position the trail element
				let elemTop = this.state.mouseY - 50 / 2,
					elemLeft = this.state.mouseX - 2 / 2,
					offsetX = Math.random() * 300,
					offsetY = Math.random() * 300;
				newTrailEl.style.top = `${elemTop + offsetY}px`;
				newTrailEl.style.left = `${elemLeft + offsetX}px`;
			}

			// Add styles specific to the ball trail
			if (this.state.styleType === 'ball') {
				let size = Math.floor(Math.random() * 60);
				newTrailEl.style.width = `${size}px`;
				newTrailEl.style.height = `${size}px`;
				let randStyle = Math.floor(
					Math.random() * this.state.ballStyles.length
				);
				newTrailEl.classList.add(this.state.ballStyles[randStyle]);

				// Position the trail element
				let elemTop = this.state.mouseY - size / 2,
					elemLeft = this.state.mouseX - size / 2,
					offsetX = Math.random() * 300,
					offsetY = Math.random() * 300;
				newTrailEl.style.top = `${elemTop + offsetY}px`;
				newTrailEl.style.left = `${elemLeft + offsetX}px`;
			}
			// Append the trail element to the hero
			document.querySelector('.hero').appendChild(newTrailEl);

			// Wait until the animation ends, then remove the trail element
			setTimeout(() => {
				document.querySelector('.hero').removeChild(newTrailEl);
			}, 1002);
			setTimeout(() => {
				this.setState({ isWaiting: false });
			}, 40);
		}
	};

	onMouseMove = (e) => {
		if (!this.state.isWaiting) {
			// Update mouse coordinates when mouse moves
			this.setState({
				mouseX    : e.pageX,
				mouseY    : e.pageY,
				isWaiting : true
			});
			this.createTrail();
		}
	};

	componentDidMount() {
		// Choose between a line or a ball trail
		let randStyle = Math.floor(Math.random() * 2);
		if (randStyle === 0) {
			this.setState({ styleType: 'line' });
		} else {
			this.setState({ styleType: 'ball' });
		}
	}

	render() {
		return (
			<section className="hero" onMouseMove={this.onMouseMove}>
				<div className="hero__contents h-100 d-flex align-items-center mx-5">
					<div>
						<h1 className="display-1 text-left">
							I'm{' '}
							<span className="hero__contents--green">
								Cassidy Groenendaal
							</span>
						</h1>
						<h1 className="display-2 text-left">
							I bring{' '}
							<span className="hero__contents--green">art</span>{' '}
							<span className="hero__contents--purple">+</span>{' '}
							<span className="hero__contents--blue">code</span>{' '}
							together
						</h1>
					</div>
				</div>
			</section>
		);
	}
}

export default HeroSection;
