import React from 'react';
import Search from '../components/Search'; 
import { useEffect } from 'react';
const url =  'https://gateway.marvel.com:443/v1/public/comics?title=Civil%20War&apikey=d265c8e3cbf415c63339ca73c3065a42'


function Comics(props) {
    useEffect(() => { 
    fetch(url)
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
        })
        .catch((err) => {
            console.error(err);
        });
}, []);
    return ( 
			<div> 
                <Search/>
			</div>
		);
}

export default Comics;