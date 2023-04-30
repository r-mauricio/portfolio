import React, { useState, useEffect } from "react";
import { debounce } from "../utils/helpers";
import { Transition } from "@headlessui/react";
import "../index.css";
import { usePrefersReducedMotion } from "../hooks/index";
import resume from "../../public/resume.pdf";

import logo from "../../public/rm-logo.png";
import Nav from "./Nav";

const link1 = (
	<a href="#about" className="link">
		About
	</a>
);
const link2 = (
	<a href="#projects" className="link">
		Projects
	</a>
);
const link3 = (
	<a href="#contact" className="link">
		Contact
	</a>
);
const link4 = (
	<a
		href={resume}
		target="_blank"
		rel="noopener noreferrer"
		className="w-36 h-10 text-white flex  items-center justify-center   border rounded-sm  hover:bg-darkIce/20 duration-300 ease-in-out hover:rounded-md md:w-24">
		Resume
	</a>
);
const links = [link1, link2, link3, link4];

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false);
	const [isShowing, setIsShowing] = useState(true);
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	const handleScroll = debounce(() => {
		const currentScrollPos = window.pageYOffset;

		setVisible(
			(prevScrollPos > currentScrollPos &&
				prevScrollPos - currentScrollPos > 35) ||
				currentScrollPos < 10
		);

		setPrevScrollPos(currentScrollPos);
	}, 100);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos, visible, handleScroll]);

	const navbarStyles = {
		transition: "top 0.6s",
	};
	const prefersReducedMotion = usePrefersReducedMotion();

	const openMenu = () => {
		setShowLinks(true);
		if (typeof window !== "undefined" && window.document) {
			document.body.style.overflow = "hidden";
		}
	};
	const closeMenu = () => {
		setShowLinks(false);
		document.body.style.overflow = "unset";
	};
	return (
		<div>
			{prefersReducedMotion ? (
				<Nav openMenu={openMenu} closeMenu={closeMenu} />
			) : (
				<div
					style={
						!showLinks
							? { ...navbarStyles, top: visible ? "0" : "-90px" }
							: null
					}
					className={
						showLinks
							? "fixed container mx-auto p-6 max-w-full bg-bgColor z-20 "
							: " fixed container mx-auto p-6 max-w-full z-20 backdrop-blur-[10px] "
					}>
					<div className="flex items-center justify-between ">
						<Transition
							className="flex flex-row space-x-16"
							appear={true}
							show={isShowing}
							style={{ transitionDelay: "100ms" }}
							enter="transition-opacity ease-in-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100">
							<a href="#" className="hover:opacity-90" aria-label="logo">
								<img
									src={logo}
									alt="rafael logo"
									className="h-[42px] w-[50px] ml-2 md:ml-4 hover:h-[43px] hover:w-[51px] duration-100 ease-linear "
								/>
							</a>
						</Transition>
						<div className="hidden md:flex md:items-center md:justify-end space-x-16 pr-[30px] text-sm font-normal text-white tracking-wide w-full">
							<Transition
								className="flex flex-row space-x-16 items-center "
								appear={true}
								show={isShowing}>
								{links.map((link, i) => (
									<Transition.Child
										key={i}
										style={{ transitionDelay: `${i + 2}00ms` }}
										enter="transition-opacity ease-in-out duration-300"
										enterFrom="opacity-0"
										enterTo="opacity-100">
										<div className="tracking-widest duration-200 ease-in-out hover:text-darkIce/50">
											{link}
										</div>
									</Transition.Child>
								))}
							</Transition>
						</div>
						{/* Hamburger Icon  */}

						{showLinks ? (
							<button
								className="ml-auto mr-3 open block hamburger md:hidden focus:outline-none group"
								onClick={closeMenu}
								aria-label="click here to close menu">
								<span className="open duration-200 ease-in-out group-hover:bg-gray-600 hamburger-top"></span>
								<span className="open duration-200 ease-in-out group-hover:bg-gray-600 hamburger-middle"></span>
								<span className="open duration-200 ease-in-out group-hover:bg-gray-600 hamburger-bottom"></span>
							</button>
						) : (
							<Transition
								className=""
								appear={true}
								show={isShowing}
								style={{ transitionDelay: "250ms" }}
								enter="transition-opacity ease-in-out duration-300"
								enterFrom="opacity-0"
								enterTo="opacity-100">
								<button
									className="block mr-3 hamburger md:hidden focus:outline-none group"
									onClick={openMenu}
									aria-label="click here to open menu">
									<span className="duration-200 ease-in-out group-hover:bg-gray-600 hamburger-top"></span>
									<span className="duration-200 ease-in-out group-hover:bg-gray-600 hamburger-middle"></span>
									<span className="duration-200 ease-in-out group-hover:bg-gray-600 hamburger-bottom"></span>
								</button>
							</Transition>
						)}

						{/*  Mobile Menu  */}
						{showLinks ? (
							<div className="md:hidden">
								<div className="fixed flex flex-col pb-36 items-center justify-center w-screen h-screen mt-7 space-y-10 font-normal text-xl left-0 top-14 bg-bgColor drop-shadow-md z-30  ">
									<Transition
										className="space-y-8 text-center"
										appear={true}
										show={isShowing}>
										{links.map((link, i) => (
											<Transition.Child
												key={i}
												style={{ transitionDelay: `${i + 1}80ms` }}
												enter="transition-opacity ease-in-out duration-300"
												enterFrom="opacity-0"
												enterTo="opacity-100"
												onClick={closeMenu}
												className="tracking-widest duration-200 ease-in-out text-white/80 hover:text-darkIce/50">
												{link}
											</Transition.Child>
										))}
									</Transition>
								</div>
							</div>
						) : null}
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
