import { useEffect, useState } from "react";
import Card from "../components/Card";
import Spinner from "../components/Spinner";

const Watch = () => {
    document.title ="Anime - Watch | Api Rest";

    const initialState =  {
        dataItems:[]
    }
    const [data, setData] = useState(initialState);
    const [loading, setLoading] = useState(false);

    const controller = new AbortController();

    /**
     * @function transformData Recibe respuesta de API, destructura y retorna objeto con datos requeridos
     * @param {object} item 
     * @returns {objeto}
     */
     const transformData = (item) => {
        const { entry: { images: { jpg: { image_url } }, mal_id, title }, episodes } = item
        const episode = episodes[0].title;
        return { mal_id , image_url , title , episode};
    };

    /**
     * @function getFetch Valida que el numero de pagina no se la actual, realiza peticion y asigna al estado
     */
    const getFetch = async() => {
        if(!loading){
            setLoading(true);
            try {
                const URL = `https://api.jikan.moe/v4/watch/episodes`;
                const { data } = await fetch( URL , {cache: 'no-cache', signal:controller.signal} ).then(e=>e.json());
                const dataItems = data.map(transformData);
                setData({dataItems:dataItems});
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        }
    }

    useEffect(() => {
        getFetch();
        return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return(
        <>
            { loading && <Spinner /> }
            <div className='content'>
                <ul>
                    {
                        data.dataItems.map( item => <Card key={ item.mal_id } anime={ item } /> )
                    }
                </ul>
            </div>
        </>
    )
}

export default Watch;