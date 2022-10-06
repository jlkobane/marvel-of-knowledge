import React, { useState } from 'react';
import ironman from '../ironman.jpg';
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
	const ts = Number(new Date());
	const hash = md5.create();
	hash.update(ts + PRIVATE_KEY + PUBLIC_KEY);

	let url = ``;
	if (categoryState === 'characters') {
		url = `https://gateway.marvel.com/v1/public/${categoryState}?nameStartsWith=${searchState}&ts=${ts}&orderBy=name&limit=50&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`;
	} else if (categoryState === 'comics') {
		url = `https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${searchState}&ts=${ts}&orderBy=title&limit=50&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`;
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
		<div className='searchel'>
			<img className='logo' src={ironman} alt='Picture of comics' />
			<div className='searchcomps'>
				<form onSubmit={handleSubmit}>
						<div className='searchtop'>
							<input
								onChange={handleChange}
								type='text'
								id='search'
								placeholder={`Search for ${categoryState}`}
							/>
							<Dropdown className='dropdown btn-danger' onSelect={handleCategoryChange}>
								<Dropdown.Toggle variant='danger' id='dropdown-basic'>
									{categoryState}
								</Dropdown.Toggle>

								<Dropdown.Menu>
									<Dropdown.Item eventKey='characters'>
										Characters
									</Dropdown.Item>
									<Dropdown.Item eventKey='comics'>Comics</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
						<button className='searchbutton' type='submit'>
							Get Character/Comic
						</button>
				</form>
			</div>
			<Results results={results} category={categoryState} />
		</div>
	);
}

export default Search;
