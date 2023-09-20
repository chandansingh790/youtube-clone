import React from 'react'

const SearchCard = ({items}) => {
	const {title,description,channelTitle} = items?.snippet
    const url = `https://www.youtube.com/embed/${items?.id?.videoId}`;
	return (
		<div className="ml-64 mb-6 flex">
			<div className="h-auto w-auto">
				<iframe
					title="anc"
					className="h-[240px] w-[420px] rounded-md"
					src={url}
				></iframe>
			</div>
			<div className="w-auto ml-4 px-2">
				<p className="font-semibold">{title}</p>
				<p className="mt-3">{channelTitle}</p>
				<p className="mt-3">{description}</p>
			</div>
		</div>
	);
}

export default SearchCard
