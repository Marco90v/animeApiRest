import { useState } from 'react';
import dataJSON from '../data.json';
import Card from '../components/Card';

const Top = () => {
    // console.log(data);
    const d = dataJSON.data.map(({mal_id,images:{jpg:{image_url}},title,title_english,type })=>{return {mal_id,image_url,title,title_english,type}});
    const [data, setData] = useState(d);
    return(
        <>
            <h2>Top</h2>
            <div className='content'>
                <ul>
                    {
                        data.map(item=><Card key={item.mal_id} anime={item} />)
                    }
                </ul>
            </div>
        </>
    )
}

export default Top;