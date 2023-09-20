import React, { useEffect, useState } from 'react'
import {YOUTUBE_API_URL} from "../utils/constants";
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
	const [videoList, setVideoList] = useState([]);
	useEffect(() => {
		getVideos();
	}, []);

	const getVideos = async () => {
		const data = await fetch(YOUTUBE_API_URL);
		const json = await data.json();
		setVideoList(json.items);
	};
	if (videoList?.length === 0 || videoList === 'undefined' || typeof videoList === 'undefined') {
		return false;
	} else {
		return (
			<div className="p-4 m-2 flex flex-wrap mt-16 absolute top-10 z-20 overflow-scroll">
				{videoList.map((video) => (
					<Link to={"/watch?v=" + video.id} key={video.id}>
						<VideoCard info={video} />
					</Link>
				))}
			</div>
		);
	}
}

export default VideoContainer
