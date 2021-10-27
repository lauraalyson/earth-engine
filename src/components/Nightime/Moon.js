import React, { Component, Fragment } from 'react'
import './nightstyles.css'

export default class Moon extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return (
			<Fragment>
				<div className='night temp'>
					<span className='moon'></span>
				</div>
			</Fragment>
		)
	}
}
