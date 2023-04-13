import React from "react"
import { Link } from 'react-router-dom';

function MovieListForm({ movieList }) {
    return (
        <div>
            <p>List</p>
            <p>{movieList.length}</p>
            <ul>
            { movieList && movieList.map( item => (
                <li key={item.movieCd}>
                    <Link to="/MovieApp/view/:key" state={item.movieCd}>{item.movieNm}</Link>
                </li>
            )) }
            </ul>
        </div>
    )
}

export default MovieListForm