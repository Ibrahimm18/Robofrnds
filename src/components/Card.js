	import React from 'react';
	const Card = ({name,username,email,id}) => {
		return (
				<div className= 'tc bg-light-pink dib br3 pa3 ma2 grow bw2 shadow-5'>
				<img alt='robots' src={`https://robohash.org/${id}?20*20`} />
				<div>
				<h1> { username } </h1>
				<h2>{ name }</h2>
				<p>{ email }</p>
				</div>
				</div>
		
	);
	}
	export default Card; 