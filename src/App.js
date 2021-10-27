import { Fragment } from 'react/cjs/react.production.min'
import Search from './components/Search'
import './App.css'

function App() {
  return (
		<div 
		className='App'
		style={{ 
			backgroundColor: '',
			padding: '3vw',
			position: 'absolute',
			top: '0',
			bottom: '0',
			height: '100vh'
		}}>
			<Fragment>
				<body>
					<h1>Earth Engine</h1>
					<Search />					
				</body>

			</Fragment>
		</div>
	)
}

export default App;
