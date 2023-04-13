import React from "react"
import { useLocation } from 'react-router-dom';

function MovieView() {
    const location = useLocation();


    return (
        <div>
            <p>View</p>
            <p>쿼리스트링: {location.pathname}</p> 
        </div>
    )
}

export default MovieView