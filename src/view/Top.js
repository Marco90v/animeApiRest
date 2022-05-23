import { useCallback, useEffect, useState } from 'react';
import dataJSON from '../data.json';
import Card from '../components/Card';
import Pagination from '../components/Pagination';

const Top = () => {
    // console.log(data);
    // const d = dataJSON.data.map(({mal_id,images:{jpg:{image_url}},title,title_english,type })=>{return {mal_id,image_url,title,title_english,type}});
    
    const callbackPrueba = (item) => {
        const { images: { jpg: { image_url } } , current_page , last_visible_page , mal_id , title , title_english , type } = item
        return { mal_id , image_url , title , title_english , type , last_visible_page, current_page };
    };
    const dataItems = dataJSON.data.map(callbackPrueba);
    const pagination = { last_visible_page: dataJSON.pagination.last_visible_page, current_page: dataJSON.pagination.current_page };
    const [data, setData] = useState({dataItems, pagination});
    
    return(
        <>
            {/* <h2>Top</h2> */}
            <div className='content'>
                <ul>
                    {
                        data.dataItems.map( item => <Card key={ item.mal_id } anime={ item } /> )
                    }
                </ul>
            </div>
            <Pagination pagination={data.pagination} />
        </>
    )
}

export default Top;