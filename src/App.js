import { Fragment, Component } from 'react/cjs/react.production.min'
import Search from './components/Search'
import './App.css'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			bgColor: '',
			txtColor: '',
		}
	}

	handleColor = (e) => {
		this.setState({ bgColor: 'black', txtColor: 'white' })
		console.log('this is clicked')
	}

	render() {
		const { bgColor, txtColor } = this.state

		return (
			<div
				className='App'
				style={{
					backgroundColor: `${bgColor}`,
					color: `${txtColor}`,
					padding: '3vw',
					position: 'absolute',
					top: '0',
					bottom: '0',
					height: '100vh',
				}}>
				<button onClick={this.handleColor}>Toggle</button>
				<Fragment>
					<body>
						<h1>Earth Engine</h1>
						<Search />
					</body>
				</Fragment>
			</div>
		)
	}
}
export default App
