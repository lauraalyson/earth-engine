import React, { Component, Fragment } from 'react'
import './daystyles.css'

export default class Snowy extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return (
			<Fragment>
				{/* Snowing */}
				<div class='snowy temp'>
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
			</Fragment>
		)
	}
}
