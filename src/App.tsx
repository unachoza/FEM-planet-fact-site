import { MouseEventHandler, useState } from "react";
import Card from "./Components/Card/Card";
import Nav from "./Components/Nav/Nav";
import { PlanetData, QuickFacts, ContentType } from "./utils/types";
import data from "./data.json";
import "./App.css";

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

	const planetFacts = Object.entries(
		shapeFactData(transformedPlanetData[navState])
	);

	const getContentCategories = (obj: PlanetData) => {
		return Object.keys(obj).filter((key) =>
			obj[key as keyof PlanetData].hasOwnProperty("content")
		);
	};

	const contentCategories = getContentCategories(
		transformedPlanetData[navState]
	);

	console.log(transformedPlanetData[navState]);
	console.log(contentCategories);
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
						{contentCategories.map((category, i) => {
							return (
								<Card
									key={i}
									style="container"
									content={[(i + 1).toString(), category]}
								/>
							);
						})}
					</div>
				</section>
			</main>
			<section className="quick-fact-container">
				{planetFacts.map((fact, i) => {
					return <Card key={i} style="container" content={fact} />;
				})}
			</section>
		</>
	);
};

export default App;
