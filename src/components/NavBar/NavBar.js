import { Component } from "react";
import { Link } from "react-router-dom";
import { NavMenuItems } from "./NavMenuItems";
import "./NavBarStyles.css";

class NavBar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="navbar">
                <h1 className="navbar__logo">Портфолио</h1>

                <div className="navbar__menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? "navbar__menu active" : "navbar__menu"}>
                    {NavMenuItems.map(({title, url, className, icon}, index) => {
                        return (
                            <li key={index}>
                                <Link className={className} to={url}>
                                    <i className={icon}></i> {title}
                                </Link>
                            </li>
                        )
                    })}
                    <button>Откликнуться</button>
                </ul>
            </nav>
        )
    }
}

export default NavBar