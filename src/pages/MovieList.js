import React, { useState, useEffect } from "react"
import MovieListForm from "./MovieListForm";

function MovieList() {
    const [ movieList, setMovieList ] = useState([]);

    const fetchEvents = async () => {
        const key = "?key=16d81e34d9d4771fed4235c4db599c1c" // key 앞에 <?key=>를 붙여야함 : prameter
        const itemPerPage = "&itemPerPage=20" //20개를 가져올것이라서
        
        const today = new Date();
        const yesterday = new Date(today.setDate(today.getDate() - 1));
        const year = yesterday.getFullYear();
        const month = ('0' + (yesterday.getMonth() + 1)).slice(-2);
        const day = ('0' + yesterday.getDate()).slice(-2);
        const dateString = year + month  + day;

        const targetDt = "&targetDt=" + dateString;
        const url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json"
                    + key
                    + itemPerPage
                    + targetDt
        // let item_int = 20
    
        const res = await fetch(url)
            .then(response=>response.json())
            .then(function(msg){
                console.log(msg)
                return [...msg.boxOfficeResult.dailyBoxOfficeList]
            });

        console.log(res);
        setMovieList(res);
    }
    
    useEffect(() => {
        fetchEvents();
    }, [])
    

    return (
        <MovieListForm movieList={movieList} />
    )
}

export default MovieList