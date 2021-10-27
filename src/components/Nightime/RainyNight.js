import React, { Component, Fragment } from 'react'
import './nightstyles.css'

export default class RainyNight extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return (
			<Fragment>
				{/* Rainy Night */}
				<div className='rainy-night temp'>
					<span className='cloud-night'></span>
					<ul>
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<i class='cloud2-night'></i>
				</div>
			</Fragment>
		)
	}
}
