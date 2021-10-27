import React, { Component, Fragment } from 'react'
import './nightstyles.css'

export default class HazeyNight extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return (
			<Fragment>
				{/* Hazey */}
				<div className='hazey-night temp'>
					<i className='haze-night'></i>
					<span className='hazey-moon'></span>
					<span className='haze2-night'></span>
				</div>
			</Fragment>
		)
	}
}
