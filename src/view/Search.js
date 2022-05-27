import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";

const Search = () => {
    document.title ="Anime - Search | Api Rest";

    const { query } = useParams();

    const initialState =  {
        dataItems:[],
        dataPage:{
            last_visible_page:0,
            current_page:0
        }
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
        const { images: { jpg: { image_url } } , mal_id , title , title_english , type } = item
        return { mal_id , image_url , title , title_english , type};
    };

    /**
     * @function getFetch Valida que el numero de pagina no se la actual, realiza peticion y asigna al estado
     * @param {number} page Numero de pagina a buscar
     */
    const getFetch = async(page=1) => {
        if(!loading){
            setLoading(true);
            try {
                const URL = `https://api.jikan.moe/v4/anime?q=${query}&page=${page}`;
                const {pagination, data} = await fetch( URL , {cache: 'no-cache', signal:controller.signal} ).then(e=>e.json());
                const dataItems = data.map(transformData);
                const dataPage = { last_visible_page: pagination.last_visible_page, current_page: pagination.current_page };
                setData({dataItems, dataPage});
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
    },[query]);

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
            {data.dataPage.last_visible_page > 0 && <Pagination pagination={data.dataPage} handleChange={getFetch} />}
        </>
    );
}

export default Search;