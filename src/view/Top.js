import { useEffect, useState } from 'react';
// import dataJSON from '../data.json';
import Card from '../components/Card';
import Pagination from '../components/Pagination';

const Top = () => {
    const initialState =  {
        dataItems:[],
        dataPage:{
            last_visible_page:0,
            current_page:0
        }
    }
    const [data, setData] = useState(initialState);
        
    const controller = new AbortController();
    
    /**
     * @function transformData Recibe respuesta de API, destructura y retorna objeto con datos requeridos
     * @param {object} item 
     * @returns {objeto}
     */
    const transformData = (item) => {
        const { images: { jpg: { image_url } } , current_page , last_visible_page , mal_id , title , title_english , type } = item
        return { mal_id , image_url , title , title_english , type , last_visible_page, current_page };
    };

    /**
     * @function getFetch Valida que el numero de pagina no se la actual, realiza peticion y asigna al estado
     * @param {Number} page Numero de pagina
     */
    const getFetch = async(page=1) => {
        if(data.dataPage.current_page !== page){
            const URL = `https://api.jikan.moe/v4/top/anime?page=${page}`;
            const {pagination, data} = await fetch( URL , {cache: 'no-cache', signal:controller.signal} ).then(e=>e.json());
            const dataItems = data.map(transformData);
            const dataPage = { last_visible_page: pagination.last_visible_page, current_page: pagination.current_page };
            setData({dataItems, dataPage});
        }
    }

    useEffect(() => {
        getFetch();
        return () => {
            controller.abort();
        }
    });
    
    return(
        <>
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

export default Top;