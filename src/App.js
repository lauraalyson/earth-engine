import { Fragment } from 'react/cjs/react.production.min'
import './App.css'
// import { Route } from 'react-router-dom'
import Search from './components/Search'

function App() {
  return (
		<div className='App'>
			<Fragment>
				<h1>Earth Engine</h1>
				<Search />
				{/* <Route path='/' render={() => (<Search />)}/> */}
			</Fragment>
		</div>
	)
}

export default App;
