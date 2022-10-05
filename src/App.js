import React, { useState } from 'react';
import Home from './components/Home';
import { Route, Routes, Link } from 'react-router-dom';
import Characters from './pages/Characters';
import './App.css'

function App() { 
	return (
		<>
			<header>
				<nav>
					<Link to='/'>Home</Link> 
					<Link to='search'>Search</Link> 
				</nav>
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
