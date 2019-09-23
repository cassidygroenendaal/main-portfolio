import React, { Component } from 'react';

import PortGrid from '../../components/PortfolioGrid';
import PortContent from '../../components/PortfolioContent';

class PortfolioSection extends Component {
	state = {
		currentItem : null,
		currentPos  : -1,
		lockScroll  : false,
		xscroll     : null,
		yscroll     : null
	};

	getViewport = (axis) => {
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
				lockScroll : true,
				xscroll    : this.scrollX(),
				yscroll    : this.scrollY()
			});
		}
		window.scrollTo(this.state.xscroll, this.state.yscroll);
	};

	clickTile = (e) => {
		e.preventDefault();
		console.log('You clicked tile', e.currentTarget.dataset.project);
		//Save which tile was clicked
		this.setState({
			currentItem : e.currentTarget,
			currentPos  : e.currentTarget.dataset.project
		});
		//Give state a moment to update
		setTimeout(this.loadContent, 1);
	};

	loadContent = () => {
		const portfolio = document.querySelector('.portfolio'),
			portGrid = document.querySelector('.port-grid');
		console.log('Loading content for tile', this.state.currentItem);
		let currentRect = this.state.currentItem.getBoundingClientRect(),
			portfolioRect = portfolio.getBoundingClientRect();
		console.log('Clicked Tile', currentRect);
		// Create dummy element
		let dummy = document.createElement('div');
		dummy.className = 'port-content__placeholder';
		// Set size/position of dummy
		dummy.style.WebkitTransform =
			// translate3d(${currentRect.left}px,
			// ${currentRect.top}px, 0px)
			`scale3d(${currentRect.width / portfolioRect.width},
			${currentRect.height / this.getViewport('y')}, 1)`;
		// translate3d(${currentRect.left}px,
		// ${currentRect.top}px, 0px)
		dummy.style.transform = `
			translate3d(${currentRect.left}px, 
				${this.state.currentItem.offsetTop}px, 0px) 
			scale3d(${currentRect.width / portfolioRect.width},
			${currentRect.height / this.getViewport('y')}, 1)`;
		// Add transition class
		dummy.classList.add('placeholder--trans-in');
		// Insert dummy after all portfolio grid items
		portfolio.appendChild(dummy);
		setTimeout(() => {
			// expands the placeholder
			dummy.style.WebkitTransform =
				'translate3d(0, -' + (this.scrollY()) + 'px, 0px)';
			dummy.style.transform =
				'translate3d(0, -' + (this.scrollY()) + 'px, 0px)';
			// disallow scroll
			// window.addEventListener('scroll', this.noscroll);
			setTimeout(() => {
				//show content
				console.log('Dummy', dummy.getBoundingClientRect());
				dummy.classList.remove('placeholder--trans-in');
				dummy.classList.add('placeholder--trans-out');
				document.querySelector(".port-content").classList.add('port-content--show')
				document.querySelector(`.port-content__item[data-project="${this.state.currentPos}"]`).classList.add('port-content__item--show')
				document.querySelector(".close-button").classList.add('close-button--show')
			}, 600)
		}, 25);

	};

	closeContent = () => {
		console.log('Clicked close!');
		const portfolio = document.querySelector('.portfolio'),
			portGrid = document.querySelector('.port-grid'),
			dummy = document.querySelector('.port-content__placeholder');
		let currentRect = this.state.currentItem.getBoundingClientRect(),
			portfolioRect = portfolio.getBoundingClientRect();
			document.querySelector(`.port-content__item[data-project="${this.state.currentPos}"]`).classList.remove('port-content__item--show')
			document.querySelector(".port-content").classList.remove('port-content--show')
			document.querySelector(".close-button").classList.remove('close-button--show')
		setTimeout(() => {
			dummy.style.WebkitTransform = `
				translate3d(${currentRect.left}px, 
					${currentRect.top}px, 0px) 
				scale3d(${currentRect.width / portfolioRect.width}, 
					${currentRect.height / this.getViewport('y')}, 1)`;
			dummy.style.transform = `
					translate3d(${currentRect.left}px, 
						${currentRect.top}px, 0px) 
					scale3d(${currentRect.width / portfolioRect.width}, 
						${currentRect.height / this.getViewport('y')}, 1)`;
		}, 25);
		setTimeout(() => {
			portfolio.removeChild(dummy);
			// Reset state
			this.setState({
				currentItem : null,
				currentPos  : -1,
				lockScroll  : false
			});
			// window.removeEventListener('scroll', this.noscroll);
		}, 1000);
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
