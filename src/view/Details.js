import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const Details = () => {
    const { mal_id } = useParams();

    // large_image_url, title, title_english, title_japanese, type, aired(string), episodes, duration, synopsis

    const initialState =  {
        dataItems:{}
    }
    const [data, setData] = useState(initialState);
    const [loading, setLoading] = useState(false);

    const controller = new AbortController();

    /**
     * @function transformData Recibe respuesta de API, destructura y retorna objeto con datos requeridos
     * @param {object} item 
     * @returns {object}
     */
     const transformData = (item) => {
        const { images: { webp: { large_image_url } } , title , title_english , title_japanese , type , episodes , aired:{ string:air } , duration , synopsis } = item
        return { large_image_url , title , title_english , title_japanese , type, episodes , air, duration , synopsis};
    };

    /**
     * @function getFetch Solicitud a la APi del id del Amine
     */
    const getFetch = async() => {
        if(!loading){
            setLoading(true);
            try {
                const URL = `https://api.jikan.moe/v4/anime/${mal_id}`;
                const { data } = await fetch( URL , {cache: 'no-cache', signal:controller.signal} ).then(e=>e.json());
                const dataItems = transformData(data);
                setData(dataItems);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        }
    }
    useEffect(() => {
        getFetch();
        return () => {
            controller.abort();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return(
        <>
            { loading ? <Spinner /> : 
            <article>
                <picture>
                    <img src={data.large_image_url} alt={data.title || data.title_english} />
                </picture>
                <section>
                    <h2>{ data.title || data.title_english }</h2>
                    <h3>{ data.title_japanese }</h3>
                    <p><strong>Date of Issue:</strong> { data.air }</p>
                    <p><strong>Type:</strong> { data.type }</p>
                    <p><strong>Episodes:</strong> { data.episodes }</p>
                    <p><strong>Duration:</strong> { data.duration }</p>
                    <p>{ data.synopsis }</p>
                </section>
            </article>}
        </>
    );
}

export default Details;