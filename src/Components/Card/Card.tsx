import "./Card.css";

type CardContent = string[];

interface CardProps {
	style: string;
	content: CardContent;
}

const Card = ({ style, content }: CardProps): JSX.Element => {
	return (
		<div className={style}>
			<div className="title">{content[0]?.toUpperCase()}</div>
			<div className="fact">{content[1].toUpperCase()}</div>
		</div>
	);
};

export default Card;
