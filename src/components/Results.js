import React from 'react';
import { Link } from 'react-router-dom';

function Results({ results }) {
	function loaded() {
		return (
			<section>
				{results.map((result, index) => {
					return (
						<div key={index}>
							<h2>{result.name}</h2>
							<h2>{result.title}</h2>
							{/* <h2>{result.items[0].name}</h2> */}
							{/* <h2>{result.comics.items.name}</h2>  */}
							{/* <img src={result.results.path.extension} alt="" /> */}
							{/* <p>{result.description}</p> */}
							{/* <p>{result.prices[0].price}</p>
							{/* <p>{result.prices[1]}</p> */}
							{/* <Link>{result.urls[1].url}</Link> */}
							{/* <Link>{result.urls[1].url}</Link>
							<Link>{result.urls[2].url}</Link> */}
							<img
								src={`${result.thumbnail.path}/portrait_large.${result.thumbnail.extension}`}
								alt={`Picture of ${result.name}`}
							/>
						</div>
					);
				})}
			</section>
		);
	}
	function loading() {
		return (
			<>
				<p>Getting info</p>
			</>
		);
	}
	return results ? loaded() : loading();
}

export default Results;
