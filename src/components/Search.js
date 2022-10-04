import React, { useState } from 'react';
import logo from '../logo.jpg';
import Results from './Results';
import md5 from 'js-md5';
import { useEffect } from 'react';
function Search(props) {
	const [results, setResults] = useState([]);
	const [searchState, setSearchState] = useState('');
	const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_API_KEY;
	const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_API_KEY;
	// console.log(PUBLIC_KEY, PRIVATE_KEY);
	const ts = Number(new Date());
	const hash = md5.create();
	hash.update(ts + PRIVATE_KEY + PUBLIC_KEY);
	// console.log(ts, hash);

	const url = `https://gateway.marvel.com/v1/public/characters?name=${searchState}&ts=${ts}&orderBy=name&limit=1&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`;
	function getResutls() {
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setResults(res.data.results);
				console.log(res);
			})
			.catch((err) => {
				console.error(err);
			});
	}
	useEffect(() => {
		getResutls();
	}, []);
	const handleChange = (event) => {
		setSearchState(event.target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		getResutls();
		console.log(results);
	};

	return (
		<div>
			<img className='logo' src={logo} alt='Picture of comics' />
			<form onSubmit={handleSubmit}>
				<label for='search'>
					<input
						onChange={handleChange}
						type='text'
						id='search'
						placeholder='Search'
					/>
					<button type='submit'>Submit</button>
				</label>
			</form>
			<Results results={results} />
		</div>
	);
}

export default Search;
