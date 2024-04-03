import { MouseEventHandler } from "react";
import "./Card.css";

type CardContent = string[];

interface CardProps {
	style: string;
	content: CardContent;
	updatePlanetContent?: MouseEventHandler<HTMLDivElement>;
}

const Card = ({ style, content, updatePlanetContent }: CardProps): JSX.Element => {
	console.log(style);
	//TODO: active state, hover state
	return (
		<div className={style} onClick={updatePlanetContent ? (event) => updatePlanetContent(event) : () => {}}>
			<div className="title">{content[0]?.toUpperCase()}</div>
			<div className="fact">{content[1].toUpperCase()}</div>
		</div>
	);
};

export default Card;
