import React, { useState, useEffect, useRef } from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import BookViewForm from './BookViewForm';
import useAxios from '../hooks/useAxios';

function BookView() {
    const [ bookInfo, setbookInfo ] = useState([]);
    const location = useLocation();
    // console.log(location)
    
    let bookCd = location.state;
    // console.log(bookCd)
    if(bookCd === null){
        bookCd = {
            title : undefined,
            link : 'https://search.shopping.naver.com/book/home',
            img : '/',
            author : undefined,
            discount : undefined,
            pubdate : undefined,
            publisher : undefined,
            description : undefined
        }

        const url = location.pathname
        // console.log(url);
        
        const directCall = useRef(false); //모든 글 로드 확인
        let directData = decodeURI(url.substr(14));
        let fullData = decodeURI(url.substr(14));

        if(directData.length > 10){
            directData = directData.substr(0, 10)
        }
        // console.log(directData);
        // console.log(directData);

        useAxios('/api/v1/search/book.json', directData, 1).then((res)=>{
            // console.log(res)
            const resData = res.data;
            // console.log(resData)
            if(resData.length > 1){
                const targetData = resData.map((element)=> element.title === fullData )
                bookCd = targetData[0];
            }else{
                // console.log(2)
                bookCd = resData[0];
            }
            // console.log(bookCd)
            if(!directCall.current){
                directCall.current = true;
                setbookInfo(bookCd);
            }
        });
        // 맞춤법 따라쓰기 4: ㅇ~ㅎ (하루 한 장으로 어휘력 쌓기)
    }
    
    let history = useNavigate();
    
    const goBack = () => {
        history(-1);
    }

    useEffect(() => {
        setbookInfo(bookCd);
    }, [])

    return (
        <BookViewForm bookInfo={bookInfo} goBack={goBack} />
    )
}

export default BookView