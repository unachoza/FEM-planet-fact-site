import { MouseEventHandler, useState } from "react";
import Card from "./Components/Card/Card";
import Nav from "./Components/Nav/Nav";
import { PlanetData, QuickFacts, ContentType } from "./utils/types";
import data from "./data.json";

const App = () => {
	//TODO: add back in Planet type (replace string)
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
		const quickFacts: QuickFacts = {
			rotationTime: data.rotation,
			revolutionTime: data.revolution,
			radius: data.radius,
			averateTemp: data.temperature,
		};

		return quickFacts;
	};

	const transformPlanetData = (
		dataArray: PlanetData[]
	): Record<string, PlanetData> => {
		const result: Record<string, PlanetData> = {};
		dataArray.forEach((obj) => {
			const { name } = obj;
			result[name] = { ...obj };
		});

		return result;
	};
	const transformedPlanetData = transformPlanetData(data);
	console.log(transformedPlanetData);

	console.log(shapeFactData(transformedPlanetData["Earth"]));

	const planetFacts = Object.entries(
		shapeFactData(transformedPlanetData[navState])
	);
	// console.log(transformedPlanetData.forEach(record => shapeFactData(record))

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
				<img
					src={`/assets/planet-${navState.toLocaleLowerCase()}.svg`}
					alt=""
				/>
				<section>
					<h1>{navState}</h1>
					<div className="content">
						{transformedPlanetData[navState].overview.content}
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
				{planetFacts.map((fact) => {
					return <Card style="container" content={fact} />;
				})}
			</section>
		</>
	);
};

export default App;
