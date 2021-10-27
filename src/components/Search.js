import React, { Component, Fragment } from 'react'
import { getWeather } from './../api/weather-api'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Sunny from './Sunny'
import Rainy from './Rainy'
import Cloudy from './Cloudy'

export default class Search extends Component {
	constructor(props) {
		super(props)

		this.state = {
			placeholder: 'ex: nashville',
			city: '',
			location: '',
			description: '',
			feelsLike: '',
			temp: '',
			tempHigh: '',
			tempLow: '',
			humidity: '',
			wind: '',
			main: '',
			display: 'none'
		}
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		})
	}
		
	handleSubmit = (event) => {
		event.preventDefault()
		const city = this.state.city
		this.setState({ placeholder: 'city' })

		console.log('this is state \n', this.state.city)

		getWeather(city)
			.then((res) =>
				this.setState({
					placeholder: 'city',
					location: res.data.name,
					description: res.data.weather[0].description,
					feelsLike: res.data.main.feels_like + 'F',
					main: res.data.weather[0].main,
					temp: res.data.main.temp + 'F',
					tempHigh: res.data.main.temp_max + 'F',
					tempLow: res.data.main.temp_min + 'F',
					humidity: res.data.main.humidity + '%',
					wind: res.data.wind.speed + 'mph',
				})
			)
			.then(() => {
				if (this.state.main === 'Clear') {
					console.log('the weather is clear')
					this.setState({ display: '' })
				} else if (this.state.main === 'Clouds') {
					this.setState({ display: 'none' })
					console.log('the weather is cloudy')
				} else {
					console.log('the weather is rainy')
				}
			})
			.catch(() => this.setState({ location: 'Not Found' }))
	}



	render() {
		const { location, description, feelsLike, temp, tempHigh, tempLow, humidity, wind, placeholder, main, display } = this.state
		return (
			<Fragment>
				<Form onSubmit={this.handleSubmit}>
					<Form.Group controlId='city'>
						<Form.Label>City</Form.Label>
						<br />
						<Form.Control
							required
							name='city'
							type='text'
							placeholder={placeholder}
							onChange={this.handleChange}
						/>
					</Form.Group>
					<Button className='primary' type='submit'>
						Submit
					</Button>
				</Form>
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

				<Sunny />
				<Rainy />
				<Cloudy />
			</Fragment>
		)
	}
}
