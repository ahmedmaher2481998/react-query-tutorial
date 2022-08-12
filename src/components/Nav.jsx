import React from "react";

const Nav = ({ setPage }) => {
	const handleClick = (e) => {
		const page = e.target.textContent;
		setPage(page);
	};
	return (
		<nav>
			<h1>Star Wars</h1>
			<div className='btn-container'>
				<button onClick={handleClick}>People</button>
				<button onClick={handleClick}>Planets</button>
			</div>
		</nav>
	);
};

export default Nav;
