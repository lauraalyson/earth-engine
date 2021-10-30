import React, { Component, Fragment } from 'react'
import './../App.css'

export default class Earth extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
				const {
					location,
					description,
					feelsLike,
					temp,
					tempHigh,
					tempLow,
					humidity,
					wind,
					main,
				} = this.props
		return (
			<Fragment>
				<div>
					<h1>Location: {location}</h1>
					<p>Description: {description}</p>
					<p>Feels Like: {feelsLike}</p>
					<p>Temp: {temp}</p>
					<p>High: {tempHigh}</p>
					<p>Low: {tempLow}</p>
					<p>Humidity: {humidity}</p>
					<p>Wind: {wind}</p>
					<p>Main: {main}</p>
				</div>
			</Fragment>
		)
	}
}
