import React from "react"
import "./TodoSearch.css"
import { useLocation, useNavigate } from "react-router-dom"

function ToDoSearch({ searchValue,
    setSearchValue, loading}){
        const navigate=useNavigate();
        const location =useLocation();
        
        React.useEffect(()=>{
            if(location.search){
                const searchUrl=location.search.replace("?search=", "")
                setSearchValue(decodeURIComponent(searchUrl))
            }},[])
            const handleInputChange=(event)=>{
                setSearchValue(event.target.value)
                if(event.target.value.length<1){
                    navigate("/")
                }
             
            }
        const handleKeyDown=(event)=>{
            if(event.key==="Enter"){
                navigate(`/search/?search=${encodeURIComponent(event.target.value)}`);
                
            }
        }
    return(
    <input placeholder="Busca Tareas" 
    className="search-input"
    value={searchValue}
    onChange={handleInputChange}
    onKeyDown={(event)=>handleKeyDown(event)}
    disabled={loading}/> 
    )
}
export {ToDoSearch}