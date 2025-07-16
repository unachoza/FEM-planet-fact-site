import { MouseEventHandler } from "react";
import "./Nav.css";
import { Link } from "react-router";

interface NavProps {
	pageNames: string[];
	updatePageContent: MouseEventHandler<HTMLLIElement>;
	activePlanet: string;
}

///// TODO
// if active, apply active class
// pass current page name

{
	/* <nav>
        <ul>
          <li>
            <Link to="/">Boxes</Link>
          </li>
          <li>
            <Link to="/scroll">ScrollTrigger</Link>
          </li>
          <li>
            <Link to="/layers">Layers Section</Link>
          </li>
        </ul>
      </nav> */
}

const Nav = ({ pageNames, updatePageContent, activePlanet }: NavProps): JSX.Element => {
	return (
		<nav>
			<h2 className="logo">The Planets</h2>
			<ul className="page-link-container">
				{pageNames.map((name, i) => {
					return (
						<li
							key={i}
							onClick={(event) => {
								updatePageContent(event);
							}}
							className={activePlanet == name ? "active" : ""}
						>
							<Link to={`/${name}`}>{name}</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Nav;
