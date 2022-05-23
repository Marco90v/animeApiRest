const Card = ({ anime }) => {
    // console.log(anime);
    const { image_url , title , title_english , type } = anime;
    const nombre = title_english ? title_english : title;
    return(
        <li>
            <picture>
                <img src={ image_url } alt={ nombre } />
            </picture>
            <h3>{ title }</h3>
            <p>Type: { type }</p>
        </li>
    );
}

export default Card;