import "./Card.css";

type CardContent = {
  title?: string;
  text: string;
};

interface CardProps {
  style: string;
  content: CardContent;
}

const Card = ({ style, content }: CardProps): JSX.Element => {
  const { title, text } = content;
  return (
    <div className={style}>
      <div className="title">{title?.toUpperCase()}</div>
      <div className="fact">{text.toUpperCase()}</div>
    </div>
  );
};

export default Card;
