import React, { useState, useRef } from "react";
import { Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";

import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

const Card = ({ projects }) => {
	const [isShowing, setIsShowing] = useState(true);
	const { ref, inView } = useInView({
		triggerOnce: true,
		rootMargin: "-100px 0px",
	});
	return (
		<div ref={ref}>
			<Transition
				className={
					inView
						? "flex flex-wrap gap-6  items-center justify-center opacity-100 duration-1000 ease-in-out"
						: "opacity-0"
				}
				appear={true}
				show={isShowing}>
				{projects.map((project, i) => {
					const { id, title, img, desc, link } = project;
					return (
						<Transition.Child
							key={i}
							style={{
								transitionDelay: `${i + 8}00ms`,
							}}
							enter="transition-opacity ease-in-out duration-1000"
							enterFrom="opacity-0 scale-50"
							enterTo="opacity-100 scale-100">
							<div
								key={id}
								className=" max-w-[300px] min-h-[360px] border rounded-md shadow bg-darkBlue border-darkBlack group hover:bg-bgColor  duration-300 ease-in-out ">
								<a href={link} aria-label="click here to check project">
									<img
										className="h-44 w-full object-cover opacity-50 rounded-t-lg duration-300 ease-in-out group-hover:opacity-70"
										src={img}
										alt="foto"
									/>
								</a>
								<div className="p-5 group-hover:bg-bgColor duration-300 ease-in-out">
									<a href={link} aria-label="click here to check project">
										<h1 className="mb-1 text-xl font-bold tracking-wide text-white">
											{title}
										</h1>
									</a>
									<p className="mb-3 text-gray-400">{desc}</p>
									<div className="flex gap-4 items-center justify-center">
										<a href={link} rel="noopener noreferrer" target="_blank">
											<FiExternalLink className="text-xl hover:text-2xl duration-200 ease-linear" />
										</a>
										<a
											href="https://github.com/r-mauricio/akropolis-website"
											rel="noopener noreferrer"
											target="_blank"
											aria-label="click here to check my github page">
											<AiFillGithub className="text-xl hover:text-2xl duration-100 ease-linear" />
										</a>
									</div>
								</div>
							</div>
						</Transition.Child>
					);
				})}
			</Transition>
		</div>
	);
};

export default Card;
