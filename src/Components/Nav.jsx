import React, { useState, useEffect } from "react";

import logo from "../../public/rm-logo.png";

const link1 = <a href="#about">About</a>;
const link2 = <a href="#projects">Projects</a>;
const link3 = <a href="#contact">Contact</a>;
const link4 = (
	<a
		href="#"
		target="_blank"
		rel="noopener noreferrer"
		className="w-36 h-10 text-white flex  items-center justify-center   border rounded-sm  hover:bg-darkIce/20 duration-300 ease-in-out hover:rounded-md md:w-24">
		Resume
	</a>
);
const links = [link1, link2, link3, link4];

const Nav = ({ toggleLinks }) => {
	const [showLinks, setShowLinks] = useState(false);

	return (
		<div className="fixed container mx-auto p-6 max-w-full bg-bgColor z-20  ">
			<div className="flex items-center justify-between ">
				<a href="#" className="hover:opacity-90 ">
					<img
						src={logo}
						alt="rafael logo"
						className="h-[42px] w-[50px] ml-2 md:ml-4 hover:h-[43px] hover:w-[51px] duration-100 ease-linear "
					/>
				</a>

				<div className="hidden md:flex md:items-center md:justify-end space-x-16 pr-[30px] text-sm font-normal text-white tracking-wide w-full">
					{links.map((link, i) => (
						<div
							key={i}
							className="tracking-widest duration-200 ease-in-out hover:text-darkIce/50">
							{link}
						</div>
					))}
				</div>
				{/* Hamburger Icon  */}

				{showLinks ? (
					<button
						className="ml-auto mr-3 open block hamburger md:hidden focus:outline-none group"
						onClick={toggleLinks}>
						<span className="open duration-200 ease-in-out group-hover:bg-gray-600 hamburger-top"></span>
						<span className="open duration-200 ease-in-out group-hover:bg-gray-600 hamburger-middle"></span>
						<span className="open duration-200 ease-in-out group-hover:bg-gray-600 hamburger-bottom"></span>
					</button>
				) : (
					<button
						className="block mr-3 hamburger md:hidden focus:outline-none group"
						onClick={toggleLinks}>
						<span className="duration-200 ease-in-out group-hover:bg-gray-600 hamburger-top"></span>
						<span className="duration-200 ease-in-out group-hover:bg-gray-600 hamburger-middle"></span>
						<span className="duration-200 ease-in-out group-hover:bg-gray-600 hamburger-bottom"></span>
					</button>
				)}

				{/*  Mobile Menu  */}
				{showLinks ? (
					<div className="md:hidden">
						<div className="fixed flex flex-col pb-36 items-center justify-center w-screen h-screen mt-7 space-y-10 font-normal text-xl left-0 top-14 bg-bgColor drop-shadow-md z-30  ">
							{links.map((link, i) => (
								<div
									key={i}
									onClick={toggleLinks}
									className="tracking-widest duration-200 ease-in-out text-white/80 hover:text-darkIce/50">
									{link}
								</div>
							))}
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Nav;
