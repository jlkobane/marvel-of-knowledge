import React, { useState } from 'react';
import logo from '../logo.jpg';
import Results from './Results';
import md5 from 'js-md5';
import { useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
function Search(props) {
	const [results, setResults] = useState([]);
	const [searchState, setSearchState] = useState(' ');
	const [categoryState, setCategoryState] = useState('Category');
	const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_API_KEY;
	const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_API_KEY;
	// console.log(PUBLIC_KEY, PRIVATE_KEY);
	const ts = Number(new Date());
	const hash = md5.create();
	hash.update(ts + PRIVATE_KEY + PUBLIC_KEY);
	// console.log(ts, hash);

	let url = ``;
	if (categoryState === 'characters') {
		 url = `https://gateway.marvel.com/v1/public/${categoryState}?nameStartsWith=${searchState}&ts=${ts}&orderBy=name&limit=50&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`;
	} else if (categoryState === 'comics') {
		 url = `https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${searchState}&ts=${ts}&orderBy=title&limit=50&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`;
	} else if (categoryState === 'creators') {
		 url = `https://gateway.marvel.com:443/v1/public/creators?nameStartsWith=${searchState}&ts=${ts}&orderBy=firstName&limit=50&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`;
	}

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
	const handleCategoryChange = (event) => {
		setCategoryState(event);
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
						placeholder={`Search for ${categoryState}`}
					/>
					<Dropdown onSelect={handleCategoryChange}>
						<Dropdown.Toggle variant='success' id='dropdown-basic'>
							{categoryState}
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item eventKey='characters'>Characters</Dropdown.Item>
							<Dropdown.Item eventKey='comics'>Comics</Dropdown.Item>
							<Dropdown.Item eventKey='creators'>Creators</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					<button type='submit'>Submit</button>
				</label>
			</form>
			<Results results={results} category={categoryState}/>
		</div>
	);
}

export default Search;
