import React from 'react';
import { Link } from 'react-router-dom';

function Results({ results, category }) {
	function loaded() {
		function characters() {
			return (
				<section>
					{results.map((result, index) => {
						return (
							<div className='Info' key={index}>
								<img
									className='Img'
									src={`${result.thumbnail.path}.${result.thumbnail.extension}`}
									alt={`Picture of ${result.name}`}
								/>
								<div className='Name'>
									<h2>{result.name}</h2>
								</div>
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
							<div classname='Info' key={index}>
								<img
									className='comicImg'
									src={`${result.thumbnail.path}.${result.thumbnail.extension}`}
									alt={`Picture of ${result.name}`}
								/>
								<div className='Name'>
									<h2>{result.title}</h2>
								</div>
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
