import React, { useState } from 'react';
import logo from '../logo.jpg'
function Search(props) {
    const [searchState, setSearchState] = useState('');
    const handleChange = (event) => { 
        setSearchState(event.target.value)
    }; 
    const handleSubmit = (event) => { 
        event.preventDefault(); 
        setSearchState('')
    };
    
    return (
			<div>
				<form onSubmit={handleSubmit}></form>
				<label HtmlFor='search'> 
                <img className='logo' src={logo} alt="Picture of comics" />
					<input
						onChange={handleChange}
						type='text'
						id='search'
						placeholder='Serach'
					/> 
                    <button type='submit'>Submit</button>
				</label>
			</div>
		);
}

export default Search;