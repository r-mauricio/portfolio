import React from "react";


const tech = ["ReactJS", "JavaScript (ES6+)", "jQuery", "TailwindCSS", "Material UI"];
const tech2 = ["Unit Test", "Rest API", "Firebase", "Redux"];



const AboutStatic = () => {
	return (
		<div id="about" className="mx-6  text-white lg:container lg:mx-auto">
			<h1 className="text-3xl mb-8 tracking-wide font-semibold text-center pt-32 pb-8 ">
				About Me
			</h1>
			<div className="space-y-2 ">
				<p className=" text-darkIce tracking-wide">
					Hi there! My name is Rafael and I love building things for the
								web.
				</p>
				<p className=" text-darkIce tracking-wide">
					With a background in Civil Engineering, I developed the ability to deal with and solve different and complex problems, which serves me well as it is a great part of web development.
				</p>
				<p className=" text-darkIce tracking-wide">My interest in web development began when I started to wonder
									how websites worked under the hood. That made me start
									watching YouTube videos on HTML, then CSS, and I realized I
									wanted to build things myself. Since then, I developed my
									skills with a lot of studying and programming. And I'm still
									excited about getting better with my work and being the best
									developer I can be.
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
						<ul className="flex flex-col items-start list-[circle] md:flex-row md:items-center">
									{tech2.map((tech2Item, i) => {
										return (
											<li
												className="text-sm font-light tracking-wider text-darkIce ml-8"
												key={i}>
												{tech2Item}
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
