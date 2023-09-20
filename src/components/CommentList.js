import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
	return comments.map((comment, index) => (
		<div>
			<Comment data={comment} key={index} />
			<div className="ml-5 pl-5 border border-l-black">
				<CommentList comments={comment.replies} />
			</div>
		</div>
	));
};

export default CommentList;
