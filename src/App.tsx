import { MouseEventHandler, useState } from "react";
import Card from "./Components/Card/Card";
import Nav from "./Components/Nav/Nav";
import { PlanetData, Planet, QuickFacts, ContentType } from "./utils/types";
import data from "./data.json";

const App = () => {
	const [navState, setNavState] = useState<string>("Mercury");
	const [content, setContent] = useState<ContentType>("planet");

	const getPlanetNames = (data: PlanetData[]): string[] => {
		return data.map((entry) => entry.name);
	};

	const handleNavChange: MouseEventHandler<HTMLDivElement> = (event) => {
		const target = event.currentTarget as HTMLDivElement;
		setNavState(target.innerHTML);
	};

	const shapeFactData = (data: PlanetData): QuickFacts => {
		console.log(data);
		const quickFacts: QuickFacts = {
			rotationTime: data.rotation,
			revolutionTime: data.revolution,
			radius: data.radius,
			averateTemp: data.temperature,
		};

		return quickFacts;
	};
	const factData = {
		title: "string",
		text: "string",
	};
	return (
		<>
			<Nav
				pageNames={getPlanetNames(data)}
				updatePageContent={handleNavChange}
			/>
			<main>
				<img src="" alt="" />
				<section>
					<h1> Earth</h1>
					<div className="content">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Eos quo ipsum ducimus maxime, incidunt quisquam
						officiis, nulla nihil pariatur alias laudantium itaque
						expedita veritatis unde neque ratione quidem! Placeat,
						sint.
					</div>
					<div className="source">
						<span>link</span>
					</div>
					<div className="content-link-list">
						<h3>
							<span></span>Overview
						</h3>
						<h3>
							<span></span>Internal Structure
						</h3>
						<h3>
							<span></span>Surface Geology
						</h3>
					</div>
				</section>
			</main>
			<section className="quick-fact-container">
				<Card style="container" content={factData} />
				<ul>
					<li>
						<span></span>
						<div className="fact"></div>
					</li>
					<li>
						<span></span>
						<div className="fact"></div>
					</li>
					<li>
						<span></span>
						<div className="fact"></div>
					</li>
					<li>
						<span></span>
						<div className="fact"></div>
					</li>
				</ul>
			</section>
		</>
	);
};

export default App;
