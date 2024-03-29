//type 
export type Link = string

//type alias
export type DataWithSource = {
    content: string;
    source: Link
}

export type PlanetImages = {
    planet: Link;
    internal: Link;
    geology: Link
}

export type PlanetData = {
    name: string;
    overview: DataWithSource;
    structure: DataWithSource;
    geology: DataWithSource;
    rotation: string;
    revloution: string;
    radius:string;
    temperature: string;
    images: PlanetImages
}

