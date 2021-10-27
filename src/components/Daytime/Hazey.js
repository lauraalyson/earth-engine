import React, { Component, Fragment } from 'react'
import './daystyles.css'

export default class Hazey extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return (
			<Fragment>
				{/* Hazey */}
				<div className='hazey temp'>
					<i className='haze'></i>
					<span className='hazey-sun'></span>
					<span className='haze2'></span>
				</div>
			</Fragment>
		)
	}
}
