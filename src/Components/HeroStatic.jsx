import React from "react";

import profile from "../../public/image.jpg";

const one = <h1 className="text-md tracking-widest pb-2 ">Hi, my name is</h1>;
const two = (
	<h2 className="text-4xl lg:text-6xl font-semibold pb-2">Rafael Maurício.</h2>
);
const three = (
	<h3 className="text-2xl lg:text-4xl text-darkIce/80 font-semibold">
		I'm a front-end developer.
	</h3>
);
const items = [one, two, three];

const HeroStatic = () => {
	return (
		<div className="w-full h-full pt-28 flex flex-col text-white lg:flex-row lg:h-screen lg:pt-0 lg:container lg:mx-auto">
			<div className="space-y-4 ml-12 flex flex-col justify-center lg:w-1/2 lg:ml-0">
				{items.map((item, i) => (
					<div key={i}>{item}</div>
				))}
			</div>
			<div className="flex mt-6 justify-center lg:mt-0 lg:justify-center lg:items-center  lg:w-1/2">
				<a href="#" className="">
					<img src={picture} alt="picture rafael" className="w-72 h-72" />
				</a>
			</div>
		</div>
	);
};

export default HeroStatic;
