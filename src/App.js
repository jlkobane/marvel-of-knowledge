import React, { useState } from 'react';
import Home from './components/Home';
import { Route, Routes, Link } from 'react-router-dom';
import Characters from './pages/Characters';
import './App.css'

function App() { 
	return (
		<>
			<header>
				<div>
					<nav className='color'>
						<Link style={{ color: 'white' }} to='/'>
							Home
						</Link>
						<Link style={{ color: 'white' }} to='search'>
							Search
						</Link>
					</nav>
				</div>
			</header>
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='search' element={<Characters />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
