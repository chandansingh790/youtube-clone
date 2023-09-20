import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';
import { addMessage } from '../utils/chatSlice';

const WatchPage = () => {
  const [liveMessage, setLiveMessage] = useState('');
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  },[]);
  const sendCommentHandler = () => {
	dispatch(
		addMessage({
			name: "Chandan",
			message: liveMessage,
		})
	);
	setLiveMessage("");
  }
  return (
		<div>
			<div className="px-14 mt-20 -z-10 ml-20 flex flex-wrap">
				<div className="h-[500px]">
					<iframe
						width="950"
						height="500"
						src={
							"https://www.youtube.com/embed/" +
							searchParams.get("v") +
							"?autoplay=1"
						}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
					></iframe>
				</div>
				<div className="w-[31rem] ml-4 shadow-lg h-[490px] overflow-y-scroll flex flex-col-reverse">
					<LiveChat />
				</div>
			</div>
			<div className="float-right mr-[4rem] p-2 border border-black w-[30rem] rounded-md">
				<input
					className="p-1 mx-1 w-80 border border-blue-400 rounded-lg"
					type="text"
					value={liveMessage}
					onInput={(e) => setLiveMessage(e.target.value)}
				/>
				<button
					onClick={sendCommentHandler}
					className="px-2 border ml-10 rounded-md shadow-lg text-xl bg-lime-300 font-semibold"
				>
					Send
				</button>
			</div>
			<CommentContainer />
		</div>
	);
}

export default WatchPage;
