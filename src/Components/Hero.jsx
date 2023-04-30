import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import profile from "../../public/profile.png";
import picture from "../../public/picture.jpeg";

import { usePrefersReducedMotion } from "../hooks/index";
import HeroStatic from "./HeroStatic";

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

const Hero = () => {
	const [isShowing, setIsShowing] = useState(true);
	const prefersReducedMotion = usePrefersReducedMotion();

	return (
		<div>
			{prefersReducedMotion ? (
				<HeroStatic />
			) : (
				<div className="w-full h-full pt-28 flex flex-col text-white lg:flex-row lg:h-screen lg:pt-0 lg:container lg:mx-auto">
					<div className="space-y-4 ml-12 flex flex-col justify-center lg:w-1/2 lg:ml-0">
						<Transition appear={true} show={isShowing}>
							{items.map((item, i) => (
								<Transition.Child
									key={i}
									style={{
										transitionDelay: `${i + 5}00ms`,
									}}
									enter="transition-opacity ease-in-out duration-1000"
									enterFrom="opacity-0"
									enterTo="opacity-100">
									<div>{item}</div>
								</Transition.Child>
							))}
						</Transition>
					</div>
					<div className="flex mt-6 justify-center lg:mt-0 lg:justify-center lg:items-center  lg:w-1/2">
						<Transition
							className="flex flex-row space-x-16"
							appear={true}
							show={isShowing}
							style={{ transitionDelay: "1000ms" }}
							enter="transition-opacity ease-in-out duration-1000"
							enterFrom="opacity-0 scale-50"
							enterTo="opacity-100 scale-100 ">
							<div>
								<img
									src={picture}
									alt="picture rafael"
									className="w-72 h-72 rounded-md"
								/>
							</div>
						</Transition>
					</div>
				</div>
			)}
		</div>
	);
};

export default Hero;
