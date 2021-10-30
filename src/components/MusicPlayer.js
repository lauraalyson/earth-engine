import React, { Component, Fragment } from 'react'
import './../App.css'

export default class MusicPlayer extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return (
			<Fragment>
				<iframe
                    title={MusicPlayer}
					src='https://open.spotify.com/embed/playlist/37i9dQZF1DX1BzILRveYHb?utm_source=generator'
					width='20%'
					height='80'
					frameBorder='0'
					allowfullscreen=''
					allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'>
                    </iframe>
			</Fragment>
		)
	}
}
