import { Fragment, Component } from 'react/cjs/react.production.min'
import Search from './components/Search'
import './App.css'

const white = '#FFFFFF'
const black = '#000000'

class App extends Component {
  constructor(props){
    super(props)
    this.state = { color: white, text: black }
    // this.changeColor = this.changeColor.bind(this)
	}

	handleColor = (e) => {
        const newColor = this.state.color == white ? black : white
		const newerColor = this.state.text == white ? black : white
		this.setState({ color: newColor, text: newerColor })
	}

	render() {
		const { color, text } = this.state

		return (
			<div
				className='App'
				style={{
					backgroundColor: `${color}`,
					color: `${text}`,
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
