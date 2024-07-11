import React from "react"
import "./TodoSearch.css"
import { useHistory, useLocation } from "react-router-dom"

function ToDoSearch({ searchValue,
    setSearchValue, loading }) {

    const location = useLocation();
    const history = useHistory();
        console.log(location)
        React.useEffect(()=>{
            if(location.search){
                setSearchValue(location.search.replace("?",""))
                console.log("EJECUCION")
                console.log(location)
              }
        },[])
    

    return (
        <input placeholder="Busca Tareas"
            className="search-input"
            value={searchValue}
            onChange={(event) => {

                history.push({
                    pathname:"/search",
                    search:event.target.value,
                })
                setSearchValue(event.target.value)
            }}
            disabled={loading} />
    )
}

export { ToDoSearch }