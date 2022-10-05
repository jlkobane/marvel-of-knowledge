import React from 'react';
import { Link } from 'react-router-dom';

function Results({ results, category }) {
	function loaded() {
		function characters() {
			return (
				<section>
					{results.map((result, index) => {
						return (
							<div key={index}>
								<h2>{result.name}</h2>
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
		function comics() {
			return (
				<section>
					{results.map((result, index) => {
						return (
							<div key={index}>
								<h2>{result.title}</h2>
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

		if (category === 'characters') {
			return characters();
		} else if (category === 'comics') {
			return comics();
		}
	}
	function loading() {
		return <h1>Getting your info</h1>;
	}
	return results ? loaded() : loading();
}

export default Results;
