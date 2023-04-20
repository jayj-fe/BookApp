import React, { useState, useEffect, useRef } from "react"
import { useNavigate } from 'react-router-dom';
import Search from '../common/Search';
import BookListForm from './BookListForm';
import useAxios from '../hooks/useAxios';

function BookList() {
    // List 기능
    const [pageHistory, setPageHistory] = useState({});
    const [searchText, setSearchText] = useState('');
    const [obsele, setObsele] = useState('');
    const [bookLists, setBookLists] = useState([]);
    
    const navi = useNavigate();
    const preventRef = useRef(true); //옵저버 중복 실행 방지
    const endRef = useRef(false); //모든 글 로드 확인

    const axiosCallEvent = (text, pageIdx) => {
        useAxios('/api/v1/search/book.json', text, pageIdx).then( (res) => {
            const datas = {
                idx : pageIdx,
                searchTxt : text
            }

            setPageHistory(datas)
            setBookLists(res.data);
            sessionStorage.removeItem("historyData");
            preventRef.current = true;
        });
    }
    const searchList = (text) => {
        setSearchText(text);
        
        if(text === ''){
            setBookLists([]);
            setPageHistory({
                idx : 10,
                searchTxt : text
            })
        }else{
            if(!endRef.current && preventRef.current){
                preventRef.current = false;
                axiosCallEvent(text, 10);
            }
        }
    }

    const obsElem = (obsele) => {
        setObsele(obsele.current);
    }

    const obsHandler = ((entries) => {
        console.log(3)
        // console.log(entries);
        const target = entries[0];
        // console.log(endRef)
        // console.log(preventRef)
        if(!endRef.current && target.isIntersecting && preventRef.current){ //옵저버 중복 실행 방지
            preventRef.current = false; //옵저버 중복 실행 방지
            if(pageHistory.idx !== 100){
                axiosCallEvent(pageHistory.searchTxt, pageHistory.idx + 10);
            }else{
                endRef.current = true;
            }
            
        }
    });
    
    const pageMove = (linkUrl, stateProp) => {
        // console.log(pageHistory)
        sessionStorage.setItem("historyData", JSON.stringify(pageHistory));
        navi(linkUrl, { state: stateProp.item })
    }

    useEffect(()=> {
        const historyData = JSON.parse(sessionStorage.getItem("historyData"));
        // console.log(historyData);
        if(historyData !== null){
            console.log('실행')
            console.log(historyData);
            axiosCallEvent(historyData.searchTxt, historyData.idx);
        }
    }, [])

    useEffect(()=> {
        const observer = new IntersectionObserver(obsHandler, { threshold : 0.5 });
        // console.log(observer);
        if(obsele) observer.observe(obsele);
        return () => { observer.disconnect(); }
    })

    return (
        <div>
            <Search searchText={searchList} />
            <BookListForm bookLists={bookLists} obsElem={obsElem} pageMove={pageMove} />
        </div>
    )
}

export default BookList