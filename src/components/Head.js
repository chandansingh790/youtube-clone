import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SEARCH_SUGGESTION_API } from "../utils/constants";
import { addCache } from "../utils/searchSlice";
import { SEARCH_KEYWORD_API } from "../utils/constants";
import { addSearchData } from "../utils/searchSuggestedSlice";
import { Link } from "react-router-dom";


const Head = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [showSuggestion, setShowSugestion] = useState(false);
	const [clearButton, setClearButton] = useState(false);
	const [searchSuggestedData,setSearchSuggestedData] = useState("");


	const dispatch = useDispatch();
	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
	};
	const searchCache = useSelector((store) => store.search);
	
	useEffect(() => {
		const timer = setTimeout(() => {
			if (searchCache[searchQuery]) {
				setSuggestions(searchCache[searchQuery]);
			} else {
				getSearchSuggestions();
			}
		}, 200);

		return () => {
			clearTimeout(timer);
		};
	}, [searchQuery]);

	useEffect(() => {
		if(searchSuggestedData !== "") {
			getSearchData();
		}
	},[searchSuggestedData]);

	const getSearchData = async () => {
		const data = await fetch(SEARCH_KEYWORD_API + searchSuggestedData);
		const json = await data.json();
		dispatch(addSearchData({ [searchSuggestedData]: json.items }));
	}

	const getSearchSuggestions = async () => {
		const data = await fetch(SEARCH_SUGGESTION_API + searchQuery);
		const json = await data.json();
		setSuggestions(json[1]);

		dispatch(addCache({ [searchQuery]: json[1] }));
	};
	const clearInputHandler = () => {
		setSearchQuery("");
		setClearButton(false);
		document.getElementById('inputSearch').focus();
	}
	document.addEventListener('click',function(event) {
		const sugDiv = document.getElementById("suggDiv");
		if (showSuggestion && event.target.id !== 'suggDiv') {
			sugDiv.style.display = "none";
		}
	})
		return (
			<div className="grid grid-flow-col p-1 fixed w-full z-[100] bg-white">
				<div className="flex col-span-1">
					<img
						onClick={() => toggleMenuHandler()}
						className="h-8 mx-2 mt-3 cursor-pointer"
						alt="menu"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjr9TZDivJqObVEMGVOX-0P8q5T71YrRUSzFe9iw_sCkvMp8T0yPklrAMvEhr9MU2S2Ng&usqp=CAU"
					/>
					<img
						className="h-14"
						alt="youtube"
						src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
					/>
				</div>
				<div className="col-span-10 px-10 mt-2 ml-32 relative z-50">
					<div className="flex">
						<input
							className="w-1/2 border border-gray-400 rounded-l-full px-5 p-1 text-justify"
							type="text"
							id="inputSearch"
							placeholder="Search"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							onFocus={() => setShowSugestion(true)}
							onInput={(e) => {
								e.target.value === ""
									? setClearButton(false)
									: setClearButton(true);
								document.getElementById("suggDiv").style.display = "block";
							}}
						/>
						{clearButton && (
							<div
								className="absolute left-[35rem] mt-1 cursor-pointer"
								onClick={clearInputHandler}
							>
								<svg width="22px" height="32px" viewBox="0 0 1024 1024">
									<path d="M899.174 154.603l-29.782-29.782-357.397 361.114-357.397-361.114-29.782 29.782 361.114 357.397-361.114 357.397 29.782 29.782 357.397-361.114 357.397 361.114 29.782-29.782-361.114-357.397z" />
								</svg>
							</div>
						)}
						<button className=" border-gray-400 rounded-r-full border w-16 px-5 p-1 bg-gray-100">
							<svg
								className="mx-1"
								width="20px"
								height="30px"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M20 20L15.8033 15.8033M18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C14.6421 18 18 14.6421 18 10.5Z"
									stroke="#000000"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
					</div>
					{showSuggestion && (
						<div
							className="fixed bg-white w-[35rem] rounded-2xl shadow-lg z-50"
							id="suggDiv"
						>
							{suggestions.map((s) => (
								<Link to={`/results?search_query=${s}`} key={s}>
									<div
										className="flex hover:bg-gray-200 cursor-pointer ml-2 p-1"
										onClick={() => {
											setSearchSuggestedData(s);
											setSearchQuery(s);
										}}
									>
										<svg
											className="mt-2 mx-2"
											width="20px"
											height="30px"
											viewBox="0 0 24 24"
											fill="none"
										>
											<path
												d="M20 20L15.8033 15.8033M18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C14.6421 18 18 14.6421 18 10.5Z"
												stroke="#000000"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										<p className="py-2 shadow-sm w-[31.5rem]">{s}</p>
									</div>
								</Link>
							))}
						</div>
					)}
				</div>
				<div className="col-span-1 mt-2">
					<svg
						enableBackground="new 0 0 50 50"
						height="40px"
						id="Layer_1"
						version="1.1"
						viewBox="0 0 50 50"
						width="40px"
					>
						<circle
							cx="25"
							cy="25"
							fill="none"
							r="24"
							stroke="#000000"
							strokeLinecap="round"
							strokeMiterlimit="10"
							strokeWidth="2"
						/>
						<rect fill="none" height="50" width="50" />
						<path d="M29.933,35.528c-0.146-1.612-0.09-2.737-0.09-4.21c0.73-0.383,2.038-2.825,2.259-4.888c0.574-0.047,1.479-0.607,1.744-2.818  c0.143-1.187-0.425-1.855-0.771-2.065c0.934-2.809,2.874-11.499-3.588-12.397c-0.665-1.168-2.368-1.759-4.581-1.759  c-8.854,0.163-9.922,6.686-7.981,14.156c-0.345,0.21-0.913,0.878-0.771,2.065c0.266,2.211,1.17,2.771,1.744,2.818  c0.22,2.062,1.58,4.505,2.312,4.888c0,1.473,0.055,2.598-0.091,4.21c-1.261,3.39-7.737,3.655-11.473,6.924  c3.906,3.933,10.236,6.746,16.916,6.746s14.532-5.274,15.839-6.713C37.688,39.186,31.197,38.93,29.933,35.528z" />
					</svg>
				</div>
			</div>
		);
};

export default Head;
