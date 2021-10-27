import React, { Component, Fragment } from 'react'
import './daystyles.css'

export default class Sunny extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return (
			<Fragment>
				<div className='hot temp'>
					<span className='sun'></span>
				</div>
			</Fragment>
		)
	}
}
