import React, { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';

function MovieView() {
    const [ movie, setMovie ] = useState([]);
    const location = useLocation();

    const movieCd = '&movieCd=' + location.state

    const key = "?key=16d81e34d9d4771fed4235c4db599c1c" // key 앞에 <?key=>를 붙여야함 : prameter
    const url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json"
                    + key
                    + movieCd


    const fetchEvents = async () => {
        const res = await fetch(url)
            .then(response=>response.json())
            .then(function(msg){
                console.log(msg)
                return msg.movieInfoResult.movieInfo
            });

        console.log(res);
        setMovie(res);
    }
    
    
    useEffect(() => {
        fetchEvents();
    }, [])

    console.log(location);

    return (
        <div>
            <div>영화제목 : {movie.movieNm}</div>
            <div>개봉날짜 : {movie.openDt}</div>
            <div>배우 : 
                <ul>
                    { movie.actors && movie.actors.map( item => (
                        <li key={item.peopleNmEn}>
                            {item.peopleNm}
                        </li>
                    )) }
                </ul>
            </div>
        </div>
    )
}

export default MovieView