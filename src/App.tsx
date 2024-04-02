import { MouseEventHandler, useState } from "react";
import Card from "./Components/Card/Card";
import Nav from "./Components/Nav/Nav";
import { PlanetData, QuickFacts, ContentType, DataWithSource, Planet } from "./utils/types";
import data from "./data.json";
import "./App.css";

const App = () => {
	const [navState, setNavState] = useState<Planet>("Mercury");
	const [contentState, setContentState] = useState<ContentType>("overview");

	const getPlanetNames = (data: PlanetData[]): string[] => {
		return data.map((entry) => entry.name);
	};

	const handleNavChange: MouseEventHandler<HTMLDivElement> = (event) => {
		const target = event.currentTarget as HTMLDivElement;
		const planet: Planet = target.innerHTML as Planet;
		setNavState(planet);
	};

	const handleConentChange: MouseEventHandler<HTMLDivElement> = (event) => {
		const target = event.currentTarget as HTMLDivElement;
		const contentType: ContentType = target.innerText.toLocaleLowerCase().replace(/\d+/g, "").replace(/^\s+/, "") as ContentType;
		setContentState(contentType);
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

	const transformPlanetData = (dataArray: PlanetData[]): Record<string, PlanetData> => {
		const result: Record<string, PlanetData> = {};
		dataArray.forEach((obj) => {
			const { name } = obj;
			result[name] = { ...obj };
		});

		return result;
	};

	const transformedPlanetData = transformPlanetData(data);

	const planetFacts = Object.entries(shapeFactData(transformedPlanetData[navState]));

	const getContentCategories = (obj: PlanetData) => {
		return Object.keys(obj).filter((key) => obj[key as keyof PlanetData].hasOwnProperty("content"));
	};

	const getContentCategoriesObject = (obj: PlanetData) => {
		const contentCategories: Partial<Record<keyof PlanetData, DataWithSource>> = {};
		Object.entries(obj).forEach(([key, value]) => {
			if (typeof value === "object" && "content" in value) {
				contentCategories[key as keyof PlanetData] = value as DataWithSource;
			}
		});
		return contentCategories;
	};

	const contentCategories = getContentCategories(transformedPlanetData[navState]);

	const planetContentObject = getContentCategoriesObject(transformedPlanetData[navState]);

	return (
		<>
			<Nav pageNames={getPlanetNames(data)} updatePageContent={handleNavChange} />
			<main>
				<section className="image-container">
					<img src={`/assets/planet-${navState.toLocaleLowerCase()}.svg`} alt="cartoon planet" />
				</section>
				<section className="content-container">
					<h1>{navState}</h1>
					<div className="content">{planetContentObject[contentState]?.content}</div>
					<div className="source">
						<a href={planetContentObject[contentState]?.source}>Wikipedia</a>
					</div>

					<div className="content-link-list">
						{contentCategories.map((category, i) => {
							return (
								<Card
									key={i}
									style={`${category === contentState && `active`} content-card`}
									content={[(i + 1).toString(), category]}
									updatePlanetContent={handleConentChange}
								/>
							);
						})}
					</div>
				</section>
			</main>
			<section className="quick-fact-container">
				{planetFacts.map((fact, i) => {
					return <Card key={i} style="fact-card" content={fact} />;
				})}
			</section>
		</>
	);
};

export default App;
