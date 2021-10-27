import React, { Component, Fragment } from 'react'
import { getWeather } from './../api/weather-api'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Sunny from './Daytime/Sunny'
import Rainy from './Daytime/Rainy'
import Cloudy from './Daytime/Cloudy'
import Hazey from './Daytime/Hazey'
import RainyNight from './Nightime/RainyNight'
import Moon from './Nightime/Moon'
import CloudyNight from './Nightime/CloudyNight'
import HazeyNight from './Nightime/HazeyNight'
import Snowy from './Daytime/Snowy'

export default class Search extends Component {
	constructor(props) {
		super(props)

		let today = new Date(),
			date =
				today.getMonth() + ' ' + today.getDate()

		// eslint-disable-next-line no-unused-vars
		let currentHour = new Date().getDate(),
			hour =
				today.getHours()

		this.state = {
			currentHour: hour,
			currentDate: date,
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
			day: false,
			rainy: false,
			cloudy: false,
			sunny: false,
			hazey: false,
			snowy: false			
		}
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		})
	}

	handleTime = () => {
		if ( this.state.currentHour > 15 < 6 ) {
			console.log('this is daytime')
			this.setState({ day: true })
		} else {
			console.log('this is nightime')
		}
	}

	handleSubmit = (event) => {
		event.preventDefault()
		const city = this.state.city
		this.setState({ placeholder: 'ex: nashville' })


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
					this.setState({ sunny: true, cloudy: false, hazy: false, rainy: false })
				} else if (this.state.main === 'Clouds') {
					this.setState({ cloudy: true, sunny: false, hazy: false, rainy: false })
				} else if (this.state.main === 'Haze') {
					this.setState({ hazy: true, cloudy: false, sunny: false, hazy: false })
				} else {
					this.setState({ rainy: true, hazy: false, cloudy: false, sunny: false })
				}
			})
			.then(() => this.handleTime())
			.catch(() => this.setState({ location: 'Not Found' }))
	}



	render() {
		const { location, description, feelsLike, temp, tempHigh, tempLow, humidity, wind, placeholder, main, rainy, cloudy, sunny, hazey } = this.state

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
					{/* <p>Current Date: {this.state.currentDate}</p>
					<p>Current Hour: {this.state.currentHour}</p> */}
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

				<br />

				<div
				style={{
					display: 'flex',
					maxWidth: '100vw',
					width: '100%',
				}}>
					<div>{ rainy ? <Rainy /> : '' }</div>
					<div>{ cloudy ? <Cloudy /> : '' }</div>
					<div>{ sunny ? <Sunny /> : '' }</div>
					<div>{ hazey ? <Hazey /> : '' }</div>
					{/* <div><Snowy /></div> */}
				</div>
			</Fragment>
		)
	}
}
