import { useRef, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
    
    let navigate = useNavigate();
    const inputRef = useRef();
    const [activeMenu, setActiveMenu] = useState(false);

    const changeMenu = () =>  setActiveMenu(!activeMenu);

    const search = (e) => {
        e.preventDefault();
        navigate(`/search/${inputRef.current.value}`);
    };

    return(
        <header className="cabecera">
            <h1>
                Anime
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
                    <li>
                        <NavLink to="animeApiRest/" className={ ({isActive}) => isActive ? 'active' : undefined }>TOP</NavLink>
                    </li>
                    <li>
                        <NavLink to="animeApiRest/watch" className={ ({isActive}) => isActive ? 'active' : undefined }>WATCH</NavLink>
                    </li>
                    <li>
                        <NavLink to="animeApiRest/Recommendations" className={ ({isActive}) => isActive ? 'active' : undefined }>RECOMMENDATIONS</NavLink>
                    </li>
                </ul>
                <div className="search">
                    <form action="" onSubmit={search}>
                        <input ref={ inputRef } type="text" name="search" id="search" />
                        <button type="submit">SEARCH</button>
                    </form>
                </div>
            </nav>
        </header>
    );
}

export default Header