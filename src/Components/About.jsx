import React, { useState, useRef } from "react";
import { Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";
import { usePrefersReducedMotion } from "../hooks/index";

import AboutStatic from "./AboutStatic";

const tech = ["ReactJS", "JavaScript (ES6+)", "NodeJS", "CSS", "HTML"];

const About = () => {
	const [isShowing, setIsShowing] = useState(true);
	const prefersReducedMotion = usePrefersReducedMotion();

	const { ref, inView } = useInView({
		triggerOnce: true,
		rootMargin: "-100px 0px",
	});
	return (
		<div>
			{prefersReducedMotion ? (
				<AboutStatic />
			) : (
				<div
					id="about"
					ref={ref}
					className="mx-6 text-white lg:container lg:mx-auto">
					<Transition
						className={
							inView ? "opacity-100 duration-1000 ease-in-out" : "opacity-0"
						}
						show={isShowing}
						style={{ transitionDelay: "200ms" }}
						enter="transition-opacity ease-in-out duration-1000"
						enterFrom="opacity-0 scale-50"
						enterTo="opacity-100 scale-100 ">
						<h1 className="text-3xl mb-8 tracking-wide font-semibold text-center pt-32 pb-8 ">
							About Me
						</h1>
						<div className="space-y-2   text-gray-300 ">
							<p>
								Hi there! My name is Rafael and I love building things for the
								web.
							</p>
							<p>
								With a background in Civil Engineering, I developed the ability
								to deal with and solve different and complex problems, which
								serves me well as it is a great part of web development.
								<p>
									My interest in web development began when I started to wonder
									how websites worked under the hood. That made me start
									watching youtube videos on html, then css and I realized I
									wanted to build things myself. Since than, I developed my
									skills with a lot of studying and programming. And I'm still
									excited about getting better with my work and be the best
									developer I can be.
								</p>
							</p>
							<p>Technologies I work with:</p>
							<div className="flex">
								<ul className="flex flex-col items-start justify-center list-[circle] md:flex-row md:items-center">
									{tech.map((techItem, i) => {
										return (
											<li
												className="text-sm font-light tracking-wider text-darkIce ml-8"
												key={i}>
												{techItem}
											</li>
										);
									})}
								</ul>
							</div>
						</div>
					</Transition>
				</div>
			)}
		</div>
	);
};

export default About;