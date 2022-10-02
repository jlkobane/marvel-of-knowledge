import React, { useState } from 'react';
import Home from './components/Home';
import { Route, Routes, Link } from 'react-router-dom';
import Comics from './pages/Comics';
import Authors from './pages/Authors'; 
import Characters from './pages/Characters';
import './App.css'

function App() { 
	return (
		<>
			<header>
				<nav>
					<Link to='/'>Home</Link> <Link to='characters'>Characters </Link> <Link to='comics'>Comics</Link>
					<Link to='authors'>Authors</Link>
				</nav>
			</header>
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='characters' element={<Characters />} />
					<Route path='comics' element={<Comics />} />
					<Route path='authors' element={<Authors />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
