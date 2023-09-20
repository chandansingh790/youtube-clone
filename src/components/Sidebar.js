import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

	if(!isMenuOpen) return null;
  return (
		<div className="p-5 w-36 fixed top-20">
			<ul>
				<Link to="/">
					<li>Home</li>
				</Link>
				<li>Shorts</li>
				<li>Gaming</li>
				<li>Music</li>
			</ul>
			<h1 className="font-bold mt-3">Subscriptions</h1>
			<ul className="p-2">
				<li>Trending</li>
				<li>Shopping</li>
				<li>Music</li>
				<li>Movies</li>
				<li>Live</li>
				<li>Gaming</li>
				<li>News</li>
			</ul>
			<h1 className="font-bold mt-3">Explore</h1>
			<ul className="p-2">
				<li>Trending</li>
				<li>Shopping</li>
				<li>Music</li>
				<li>Movies</li>
				<li>Live</li>
				<li>Gaming</li>
				<li>News</li>
			</ul>
		</div>
	);
}

export default Sidebar
