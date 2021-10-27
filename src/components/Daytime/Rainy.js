import React, { Component, Fragment } from 'react'
import './daystyles.css'

export default class Rainy extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return (
			<Fragment>
				{/* Rain */}
				<div className='rainy temp'>
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
