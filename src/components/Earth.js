import React, { Component, Fragment } from 'react'
import './../App.css'

export default class Earth extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return (
			<Fragment>
				{/* Sunny */}
				<div className='hot'>
					<span className='sun'></span>
				</div>

				{/* Cloudy */}
				<div className='cloudy'>
					<i className='cloud'></i>
					<span className='cloudy-sun'></span>
					<span className='cloud2'></span>
				</div>

				{/* Snowing */}
				<div class='snowy'>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<span class='snow-head'></span>
					<span class='snow-body'></span>
					<span class='left-arm'></span>
					<span class='right-arm'></span>
				</div>

				{/* Rain */}
				<div className='rainy'>
					<span className='cloud'></span>
					<ul>
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<i class='cloud2'></i>
				</div>
			</Fragment>
		)
	}
}
