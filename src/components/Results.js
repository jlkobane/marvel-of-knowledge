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
							<p>{result.description}</p>
							<Link>
								{result.urls[1].url}
							</Link>
							<img src={`${result.thumbnail.path}.${result.thumbnail.extension}`} alt={`Picture of ${result.name}`} />
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
