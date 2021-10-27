import React, { Component, Fragment } from 'react'
import './nightstyles.css'

export default class CloudyNight extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return (
			<Fragment>
				{/* Cloudy Night */}
				<div className='night temp'>
					<i className='cloud-night'></i>
					<span className='cloudy-moon'></span>
					<span className='cloud2-night'></span>
				</div>
			</Fragment>
		)
	}
}
