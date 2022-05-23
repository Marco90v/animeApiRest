import { useState } from "react";

const Pagination = ({ pagination }) => {

    const [page, setPage] = useState(pagination.current_page);

    const changePageSubmit = (e) => {
        e.preventDefault();
        console.log(page);
    }
    /**
     * @function changePage Cambia la pagina
     * @param {string} type 
     */
    const changePage = (type) => {
        switch (type) {
            case 'increment':
                page <= (pagination.last_visible_page)-2 && setPage(page+1);
                break;
            case 'decrement':
                page >=  2 && setPage(page-1);
                break;
            case 'first':
                setPage(1);
                break;
            case 'last':
                setPage(pagination.last_visible_page);
                break;
            default:
                break;
        }
    }
    
    return(
        <div className="pagination">
            <button onClick={()=>changePage('first')}>First Page</button>
            <button onClick={()=>changePage('decrement')} >Prev</button>
            <form onSubmit={changePageSubmit} >
                <input type="number" value={page} onChange={(e)=>setPage(parseInt(e.target.value))} />
            </form> 
            <button onClick={()=>changePage('increment')} >Next</button>
            <button onClick={()=>changePage('last')}>Last Page</button>
        </div>
    );

}

export default Pagination