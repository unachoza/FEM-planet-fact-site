//type
export type Link = string;

//type alias
export type DataWithSource = {
	content: string;
	source: Link;
};

export type ContentType = "planet" | "internal" | "geology";

export type Planet =
	| "Mercury"
	| "Venus"
	| "Earth"
	| "Mars"
	| "Jupiter"
	| "Saturn"
	| "Uranus"
	| "Neptune";

export type PlanetImages = {
	planet: Link;
	internal: Link;
	geology: Link;
};

export type QuickFacts = {
	rotationTime: string;
	revolutionTime: string;
	radius: string;
	averateTemp: string;
};

export type PlanetData = {
	name: string;
	overview: DataWithSource;
	structure: DataWithSource;
	geology: DataWithSource;
	rotation: string;
	revolution: string;
	radius: string;
	temperature: string;
	images: PlanetImages;
};
