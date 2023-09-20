import React from 'react';
import CommentList from './CommentList';

const commentsData = [
	{
		name: "Chandan Singh",
		text: "Lorem Ipsum dolor sit amet, consecture adip",
		replies: [],
	},
	{
		name: "Chandan Singh",
		text: "Lorem Ipsum dolor sit amet, consecture adip",
		replies: [
			{
				name: "Chandan Singh",
				text: "Lorem Ipsum dolor sit amet, consecture adip",
				replies: [],
			},
			{
				name: "Chandan Singh",
				text: "Lorem Ipsum dolor sit amet, consecture adip",
				replies: [
					{
						name: "Chandan Singh",
						text: "Lorem Ipsum dolor sit amet, consecture adip",
						replies: [
							{
								name: "Chandan Singh",
								text: "Lorem Ipsum dolor sit amet, consecture adip",
								replies: [],
							},
							{
								name: "Chandan Singh",
								text: "Lorem Ipsum dolor sit amet, consecture adip",
								replies: [
									{
										name: "Chandan Singh",
										text: "Lorem Ipsum dolor sit amet, consecture adip",
										replies: [],
									},
									{
										name: "Chandan Singh",
										text: "Lorem Ipsum dolor sit amet, consecture adip",
										replies: [],
									},
								],
							},
						],
					},
				],
			},
		],
	},
	{
		name: "Chandan Singh",
		text: "Lorem Ipsum dolor sit amet, consecture adip",
		replies: [
			{
				name: "Chandan Singh",
				text: "Lorem Ipsum dolor sit amet, consecture adip",
				replies: [],
			},
			{
				name: "Chandan Singh",
				text: "Lorem Ipsum dolor sit amet, consecture adip",
				replies: [
					{
						name: "Chandan Singh",
						text: "Lorem Ipsum dolor sit amet, consecture adip",
						replies: [],
					},
				],
			},
		],
	},
	{
		name: "Chandan Singh",
		text: "Lorem Ipsum dolor sit amet, consecture adip",
		replies: [],
	},
	{
		name: "Chandan Singh",
		text: "Lorem Ipsum dolor sit amet, consecture adip",
		replies: [],
	},
	{
		name: "Chandan Singh",
		text: "Lorem Ipsum dolor sit amet, consecture adip",
		replies: [],
	},
	{
		name: "Chandan Singh",
		text: "Lorem Ipsum dolor sit amet, consecture adip",
		replies: [],
	},
];

const CommentContainer = () => {
  return (
		<div className="ml-28 py-6 m-4">
			<h1 className="font-semibold text-xl">Comments:</h1>
			<CommentList comments={commentsData} />
		</div>
	);
}

export default CommentContainer;
