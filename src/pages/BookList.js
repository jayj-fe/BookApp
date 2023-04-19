import React, { useState, useEffect, useRef } from "react"
import Search from '../common/Search';
import BookListForm from './BookListForm';
import useAxios from '../hooks/useAxios';

function BookList() {
    // List 기능
    const [pageHistory, setPageHistory] = useState({});
    const [searchText, setSearchText] = useState('');
    const [obsele, setObsele] = useState('');
    const [bookLists, setBookLists] = useState([]);

    const obsRef = useRef();
    const preventRef = useRef(true); //옵저버 중복 실행 방지
    const endRef = useRef(false); //모든 글 로드 확인

    const axiosCallEvent = (text, pageIdx) => {
        useAxios('/api/v1/search/book.json', text, pageIdx).then( (res) => {
            // console.log(res)

            // console.log(res.pageIdx)
            setPageHistory({
                idx : pageIdx,
                searchTxt : text
            })
            preventRef.current = true;
            console.log(pageIdx);

            // if(calltype == 'load'){
                // setBookLists(res.data);
            // }

            setBookLists(res.data);
        });
    }
    const searchList = (text) => {
        // console.log(text);
        setSearchText(text);
        
        if(text === ''){
            setBookLists([]);
            setPageHistory({
                idx : 10,
                searchTxt : text
            })
        }else{
            axiosCallEvent(text, 10);
        }
    }

    const obsElem = (obsele) => {
        setObsele(obsele.current);
    }

    const obsHandler = ((entries) => {
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

    useEffect(()=> {
        const observer = new IntersectionObserver(obsHandler, { threshold : 0.5 });
        // console.log(observer);
        if(obsele) observer.observe(obsele);
        return () => { observer.disconnect(); }
    })

    return (
        <div>
            <Search searchText={searchList} />
            <BookListForm bookLists={bookLists} obsElem={obsElem}/>
        </div>
    )
}

export default BookList