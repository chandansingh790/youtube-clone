import React from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import SearchCard from './SearchCard';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

const SearchResults = () => {
  const [searchString] = useSearchParams();
  const query = searchString.get("search_query");
  const searchDatas = useSelector((store) => store.searchData[query]);
  
  if (searchDatas === "undefined" || typeof searchDatas === 'undefined') {
		return null;
	} else {
		return (
			<div className="w-full ml-20 mt-20">
					{searchDatas.map((data) => (
						<Link to={"/watch?v=" + data?.id?.videoId} key={data?.id?.videoId}>
							<SearchCard key={data?.id?.videoId} items={data} />
						</Link>
					))}
			</div>
		);
	}
}

export default SearchResults
