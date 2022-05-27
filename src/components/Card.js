import { Link } from "react-router-dom";

const Card = ({ anime }) => {
    const { image_url , title , title_english , type, episode, mal_id } = anime;
    const nombre = title_english || title;
    const badge = type || episode;
    return(
        <li>
            <Link to={`details/${mal_id}`}>
                <picture>
                    <img src={ image_url } alt={ nombre } />
                </picture>
                <h3>{ title }</h3>
                { badge && <p>{ badge }</p> }
            </Link>
        </li>
    );
}

export default Card;