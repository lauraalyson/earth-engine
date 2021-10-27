import React, { Component, Fragment } from 'react'
import './daystyles.css'

export default class Cloudy extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return (
			<Fragment>
				{/* Cloudy */}
				<div className='cloudy temp'>
					<i className='cloud'></i>
					<span className='cloudy-sun'></span>
					<span className='cloud2'></span>
				</div>
			</Fragment>
		)
	}
}
