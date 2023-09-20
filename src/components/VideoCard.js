import React from 'react'
import { formatNumber } from '../utils/helper';

const VideoCard = ({info}) => {
	const {snippet, statistics} = info;
	const image_url = snippet?.thumbnails?.maxres?.url;
    const { title, channelTitle } = snippet;
	return (
		<div className="w-96 rounded-lg m-2 p-2 cursor-pointer">
			<img className="h-52 w-96 rounded-lg" src={image_url} alt="img" />
			<ul className="my-2 text-gray-500">
				<li className="font-bold text-gray-800">{title}</li>
				<li>{channelTitle}</li>
				<li>
					{formatNumber(Number(statistics.viewCount))} views{" "}
					<span className="font-bold mx-4">.</span>{" "}
					{formatNumber(Number(statistics.likeCount))}{" "}
					likes
				</li>
			</ul>
		</div>
	);
}

export default VideoCard
