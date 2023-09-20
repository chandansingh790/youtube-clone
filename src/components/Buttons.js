import React from 'react'

const Buttons = ({name}) => {
  return (
		<div>
			<button className="p-3 whitespace-nowrap py-1 m-2 inline-flex flex-row border bg-gray-200 rounded-lg shadow-sm">
				{name}
			</button>
		</div>
	);
}

export default Buttons
