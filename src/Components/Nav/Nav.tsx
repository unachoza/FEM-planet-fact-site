import { MouseEventHandler } from "react";
import "./Nav.css";

interface NavProps {
	pageNames: string[];
	updatePageContent: MouseEventHandler<HTMLDivElement>;
}

const Nav = ({ pageNames, updatePageContent }: NavProps): JSX.Element => {
	return (
		<nav>
			<h2 className="logo">The Planets</h2>
			<div className="page-link-container">
				{pageNames.map((name, i) => {
					return (
						<h4
							key={i}
							onClick={(event) => {
								updatePageContent(event);
							}}
						>
							{name}
						</h4>
					);
				})}
			</div>
		</nav>
	);
};

export default Nav;
