import React from 'react';

function Results({ results }) {
	function loaded() {
		return (
			<section>
				{results.map((result, index) => {
					return (
						<div key={index}>
							<h2>{result.name}</h2>
							<p>{result.description}</p>
							<img src={result.thumbnail.path} alt='' />
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
