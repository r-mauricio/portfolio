import React from "react";

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
	return (
		<div>
			<footer className="py-2">
				<div className="mx-auto mt-36 my-4 text-center font-thin  text-white/80 tracking-wider">
					Designed and Built by Rafael Maurício
				</div>

				<div className="flex items-center justify-center mx-auto flex-row gap-2 mb-6">
					<a
						href="https://github.com/r-mauricio"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="click here to check my github profile">
						<AiFillGithub className="text-white text-xl hover:text-gray-300 hover:text-2xl duration-100 ease-linear " />
					</a>

					<a
						href="https://www.linkedin.com/in/rafael-mauricio/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="click here to check my linkedin profile">
						<AiFillLinkedin className="text-white text-xl hover:text-gray-300 hover:text-2xl duration-100 ease-linear" />
					</a>

					<a
						href="mailto:rafaels.m@outlook.com"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="click here to send me an email">
						<AiOutlineMail className="text-white text-xl hover:text-gray-300 hover:text-2xl duration-100 ease-linear " />
					</a>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
