import { useState } from "react"
import { Link } from "react-router-dom";

const Header = () => {
    const [activeMenu, setActiveMenu] = useState(false)
    const changeMenu = () => {
        setActiveMenu(!activeMenu);
    }
    return(
        <header className="cabecera">
            <h1>
                Anime - Jikan
                <div className={`buttonMenu${activeMenu ? ' active' : ''}`}  onClick={changeMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                </div>
            </h1>
            <nav className={activeMenu ? 'active' : ''}>
                <ul>
                    <li><Link to="/">Top</Link></li>
                    <li><Link to="/watch">Watch</Link></li>
                    <li><Link to="/Recommendations">Recommendations</Link></li>
                </ul>
                <div className="search">
                    <form action="">
                        <input type="text" name="search" id="" />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </header>
    )
}

export default Header