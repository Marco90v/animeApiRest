import { useEffect, useState } from "react";
import Card from "../components/Card"
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner"

const Recommendations = () => {
    document.title ="Anime - Recommendation | Api Rest";

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
     * @returns {object[]}
     */
     const transformData = (item) => {
        const [ value1 , value2 ] = item.entry
        const item1 = {
            mal_id: value1.mal_id,
            image_url: value1.images.jpg.image_url,
            title: value1.title
        }
        const item2 = {
            mal_id: value2.mal_id,
            image_url: value2.images.jpg.image_url,
            title: value2.title
        }
        return [item1,item2];
    };

    /**
     * @function getFetch Valida que el numero de pagina no se la actual, realiza peticion y asigna al estado
     * @param {number} page Numero de pagina a buscar
     */
    const getFetch = async(page=1) => {
        if(!loading){
            setLoading(true);
            try {
                const URL = `https://api.jikan.moe/v4/recommendations/anime?page=${page}`;
                const {pagination, data} = await fetch( URL , {cache: 'no-cache', signal:controller.signal} ).then(e=>e.json());
                const dataItems = data.map(transformData).flat().reduce( (acc,item)=>{
                    let valida = false;
                    for (const e of acc) {
                        if(e.mal_id === item.mal_id){
                            valida = true;
                            break;
                        }
                    }
                    if(!valida) acc.push(item);
                    return acc;
                },[] );
                const dataPage = { last_visible_page: pagination.last_visible_page, current_page: page };
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
        {data.dataPage.last_visible_page > 0 && <Pagination pagination={data.dataPage} handleChange={getFetch} />}
    </>
    )
}

export default Recommendations