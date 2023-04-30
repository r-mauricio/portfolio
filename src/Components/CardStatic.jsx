import React from "react";

import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

const CardStatic = ({ projects }) => {
	return (
		<div className="flex flex-wrap gap-6  items-center justify-center opacity-100 duration-1000 ease-in-out">
			{projects.map((project, idx) => {
				const { title, img, desc } = project;
				return (
					<div
						key={idx * 3 + 4}
						className=" max-w-[300px] h-[360px] border rounded-md shadow bg-darkBlue border-darkBlack group hover:bg-bgColor  duration-300 ease-in-out ">
						<a href="">
							<img
								className="h-44 w-full object-cover opacity-50 rounded-t-lg duration-300 ease-in-out group-hover:opacity-70"
								src={img}
								alt="foto"
							/>
						</a>
						<div className="p-5 group-hover:bg-bgColor duration-300 ease-in-out">
							<a href="">
								<h5 className="mb-1 text-xl font-bold tracking-wide text-white">
									{title}
								</h5>
							</a>
							<p className="mb-3 text-gray-400">{desc}</p>
							<div className="flex gap-4 items-center justify-center">
								<a
									href="https://www.akropolis.netlify.com"
									rel="noopener noreferrer"
									target="_blank">
									<FiExternalLink className="text-xl hover:text-2xl duration-200 ease-linear" />
								</a>
								<a
									href="https://github.com/r-mauricio/akropolis-website"
									rel="noopener noreferrer"
									target="_blank">
									<AiFillGithub className="text-xl hover:text-2xl duration-100 ease-linear" />
								</a>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default CardStatic;
