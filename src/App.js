import React from 'react';
import './styles/index.css';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';

function App() {
	return (
		<div className="app__container">
			<div className="boxes box1"></div>
			<div className="boxes box2"></div>
			<div className="boxes box3"></div>
			<div className="boxes box4"></div>
			<div className="boxes box5"></div>
			<Navbar />
			<Showcase />
		</div>
	);
}

export default App;
