import { useEffect, useState } from "react";

const Pagination = ({ pagination, handleChange }) => {
    const [page, setPage] = useState(pagination.current_page);

    /**
     * @function changePage Cambia la pagina
     * @param {string} type recibe un tipo de acción
     */
    const changePage = (type) => {
        switch (type) {
            case 'increment':
                page <= (pagination.last_visible_page)-1 && setPage(page+1);
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

    /**
     * @function validationInput Valida entrada del input para retornar valores validos entre 1 y el max de paginas
     * @param {string} newNumPage Recibe el valor del input
     * @returns {Number} Retorna numero de pagina
     */
    const validationInput = (newNumPage) => {
        newNumPage = newNumPage === '' ? 0 : parseInt(newNumPage);
        switch (true) {
            case newNumPage <= 0:
                return 1;
            case newNumPage > 0 && newNumPage < pagination.last_visible_page:
                return newNumPage;
            case newNumPage > pagination.last_visible_page:
                return pagination.last_visible_page;
            default:
                break;
        }
    }

    useEffect(() => {
        handleChange(page);
      return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);
    
    
    return(
        <div className="pagination">
            <button onClick={()=>changePage('first')}>First Page</button>
            <button onClick={()=>changePage('decrement')} >Prev</button>
            <input type="number" value={page} onChange={
                (e)=>{
                    const num = validationInput(e.target.value);
                    setPage(num);
                }
            } />
            <button onClick={()=>changePage('increment')} >Next</button>
            <button onClick={()=>changePage('last')}>Last Page</button>
        </div>
    );

}

export default Pagination