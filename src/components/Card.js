const Card = ({ anime }) => {
    const { image_url , title , title_english , type, episode } = anime;
    const nombre = title_english || title;
    const badge = type || episode;
    return(
        <li>
            <picture>
                <img src={ image_url } alt={ nombre } />
            </picture>
            <h3>{ title }</h3>
            <p>{ badge }</p>
        </li>
    );
}

export default Card;