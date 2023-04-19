import React, { useState, useEffect } from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import BookViewForm from './BookViewForm';

function BookView() {
    
    const [ bookInfo, setbookInfo ] = useState([]);
    const location = useLocation();

    // console.log(location);
    const bookCd = location.state;

    // console.log(bookCd);
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