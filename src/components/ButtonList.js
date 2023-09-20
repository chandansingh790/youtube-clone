import React from 'react'
import Buttons from './Buttons'

const buttonList = [
	"All",
	"Live",
	"Bollywood Music",
	"News",
	"JavaScript",
	"Gaming",
	"React",
	"Food",
	"Temple",
	"New Delhi",
	"Laptops",
	"Mobiles",
	"Mobiles",
	"Mobiles",
	"Mobiles",
	"Mobiles",
	"Mobiles",
	"Mobiles",
	"Mobiles"
];

const ButtonList = () => {
  return (
		<div className="flex flex-row ml-7 fixed top-16 w-auto z-30 bg-white">
			{buttonList.map((btns) => (
				<Buttons
					key={Math.floor(Math.random() * 100000).toString()}
					name={btns}
				></Buttons>
			))}
		</div>
	);
}

export default ButtonList
