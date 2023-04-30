import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";
import { usePrefersReducedMotion } from "../hooks/index";

const item1 = (
	<p className="py-6 pb-16 mx-auto text-xl max-w-xl  text-darkIce">
		If you want to know a little bit more about myself, my work or about working
		together, please feel free to contact me
	</p>
);
const item2 = (
	<a
		href="mailto:rafaels.m@outlook.com"
		aria-label="click here to contact me via email"
		target="_blank"
		rel="noopener noreferrer"
		className="items-center justify-center w-72 mx-auto px-5 py-4 text-md font-medium text-center text-ice  rounded-sm border border-darkIce  focus:ring-4   hover:bg-darkIce/10 focus:ring-gray-800 duration-300 ease-in-out hover:rounded-md">
		LET'S WORK TOGETHER
	</a>
);
const items = [item1, item2];

const Contact = () => {
	const [isShowing, setIsShowing] = useState(true);
	const prefersReducedMotion = usePrefersReducedMotion();

	const { ref, inView } = useInView({
		triggerOnce: true,
		rootMargin: "-100px 0px",
	});

	return (
		<div>
			{prefersReducedMotion ? (
				<div
					id="contact"
					className="pt-32 flex-col text-ice lg:container lg:mx-auto">
					<h1 className="text-4xl text-center tracking-wide font-semibold mb-4">
						Contact Me
					</h1>
					<div className="flex flex-col items-center ">
						{items.map((item, i) => (
							<div key={i}>{item}</div>
						))}
					</div>
				</div>
			) : (
				<div
					id="contact"
					ref={ref}
					className="pt-32 flex-col text-ice lg:container lg:mx-auto">
					<Transition
						className={
							inView
								? "opacity-100 duration-1000 ease-in-out space-y-8 text-center"
								: "opacity-0 "
						}
						appear={true}
						show={isShowing}>
						<h1 className="text-4xl text-center tracking-wide font-semibold mb-4">
							Contact Me
						</h1>
						<div className="flex flex-col ">
							{items.map((item, i) => (
								<Transition.Child
									key={i}
									style={{ transitionDelay: `${i + 1}80ms` }}
									enter="transition-opacity ease-in-out duration-300"
									enterFrom="opacity-0"
									enterTo="opacity-100"
									className="">
									{item}
								</Transition.Child>
							))}
						</div>
					</Transition>
				</div>
			)}
		</div>
	);
};

export default Contact;
