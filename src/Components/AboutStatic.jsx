import React from "react";

const tech = ["ReactJS", "JavaScript (ES6+)", "NodeJS", "CSS", "HTML"];

const AboutStatic = () => {
	return (
		<div id="about" className="mx-6  text-white lg:container lg:mx-auto">
			<h1 className="text-2xl mb-8 tracking-wide font-semibold text-center pt-32 pb-12 ">
				About Me
			</h1>
			<div className="space-y-2 ">
				<p className=" text-darkIce tracking-wide">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
					numquam tempora cumque ipsam itaque saepe quaerat voluptatem doloribus
					error aliquam?
				</p>
				<p className=" text-darkIce tracking-wide">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. At est
					deserunt quis a totam! Quia praesentium ex aut dolore dolor?
				</p>
				<p className=" text-darkIce tracking-wide">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
					deserunt eum ab ullam animi eligendi aspernatur quod natus illo quasi!
				</p>
				<p className=" text-darkIce tracking-wide">Technologies I work with:</p>
				<div className="flex">
					<ul className="flex flex-col items-start justify-center list-[square] md:flex-row md:items-center">
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
		</div>
	);
};

export default AboutStatic;
