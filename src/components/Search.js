import React, { Component, Fragment } from 'react'
import { getWeather } from './../api/weather-api'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class Search extends Component {
	constructor(props) {
		super(props)

		this.state = {
			latitude: '',
			longitude: '',
		}
	}

	handleChange = (event) =>
		this.setState({
			[event.target.name]: event.target.value,
		})
    
	handleSubmit = (event) => {
		console.log('Submit has been clicked')
		event.preventDefault()
		const lat = '60.99'
		const lon = '30.9'
        const api = '1419ddd139590bc4a97440c9fe925f48'
        const part = '1586468027'

		getWeather(lat, lon, part, api)
            .then((res) =>
			    console.log('This is the response\n', res)
		    )
            .then(() => console.log('this is state, \n', this.state.longitude, this.state.latitude))
	}

	render() {
		return (
			<Fragment>
				<Form onSubmit={this.handleSubmit}>
					<Form.Group controlId='location'>
						<Form.Label>Latitude</Form.Label>
						<br />
						<Form.Control
							required
							name='Latitude'
							type='text'
							placeholder='Latitude'
							// value={this.state.latitude}
							onChange={this.handleChange}
						/>
						<br />
					</Form.Group>
					<br />
					<Form.Group controlId='description'>
						<Form.Label>Longitude</Form.Label>
						<br />
						<Form.Control
							required
							name='Longitude'
							type='text'
							// value={this.state.longitude}
							placeholder='Longitude'
							onChange={this.handleChange}
						/>
						<br />
					</Form.Group>
					<br />
					<Button className='primary' type='submit'> Submit</Button>
				</Form>
			</Fragment>
		)
	}
}
