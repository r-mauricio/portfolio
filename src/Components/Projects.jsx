import React, { useState, useRef } from "react";
import { Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";
import Card from "./Card";
import CardStatic from "./CardStatic";

import projects from "../../public/projects.js";
import { usePrefersReducedMotion } from "../hooks/index";

const Projects = () => {
	const [isShowing, setIsShowing] = useState(true);
	const prefersReducedMotion = usePrefersReducedMotion();

	const { ref, inView } = useInView({
		triggerOnce: true,
		rootMargin: "-100px 0px",
	});
	return (
		<div>
			{prefersReducedMotion ? (
				<div id="projects" className="pt-20 text-white lg:container lg:mx-auto">
					<h1 className="text-2xl text-center tracking-wide font-semibold my-12">
						Projects
					</h1>
					<div>
						<CardStatic projects={projects} />
					</div>
				</div>
			) : (
				<div
					id="projects"
					ref={ref}
					className="pt-20 text-white lg:container lg:mx-auto">
					<Transition
						className={
							inView ? "opacity-100 duration-1000 ease-in-out" : "opacity-0"
						}
						show={isShowing}
						style={{ transitionDelay: "200ms" }}
						enter="transition-opacity ease-in-out duration-1000"
						enterFrom="opacity-0 scale-50"
						enterTo="opacity-100 scale-100 ">
						<h1 className="text-3xl text-center tracking-wide font-semibold my-12">
							Main Projects
						</h1>
					</Transition>
					<div>
						<Card projects={projects} />
					</div>
				</div>
			)}
		</div>
	);
};

export default Projects;
