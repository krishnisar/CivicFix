import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <header>
            <nav className="navbar">

                <div className="logo">
                    🏙️ CivicFix
                </div>

                <ul className="nav-links">

                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/report">
                            Report Issue
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/issues">
                            Track Issues
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/help">
                            Community Help
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard">
                            Dashboard
                        </NavLink>
                    </li>

                </ul>

            </nav>
        </header>
    );
}

export default Navbar;