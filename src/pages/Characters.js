import React, { useState } from 'react';
import Search from '../components/Search'; 
import { useEffect } from 'react';
import { json } from 'react-router-dom';
import Results from '../components/Results';

const url = 'https://gateway.marvel.com:443/v1/public/characters?name=hulk&apikey=d265c8e3cbf415c63339ca73c3065a42' 
function Characters(props) { 
const [characters, setCharacters] = useState();
useEffect(() => { 
    fetch(url)
		.then((res) => res.json())
		.then((json) => {
			setCharacters(json) 
		})
		.catch((err) => {
			console.error(err);
		});
	}, []); 
	return (  
		<section> 

		{characters.map((character) => { 
			
			
			
			return (
			<div> 
			{character.id} 
			
			<Search/>	
			</div>
			
			); 
			
		})}   
		</section>
	
); 
}

export default Characters;