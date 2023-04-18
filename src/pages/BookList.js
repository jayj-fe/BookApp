import React from "react"
import Search from '../common/Search';
import BookListForm from './BookListForm';
import useAxios from '../hooks/useAxios';
import { useState, useEffect } from "react"

function BookList() {
    // List 기능
    const [searchText, setSearchText] = useState('');
    const [bookLists, setBookLists] = useState([]);

    const searchList = (text) => {
        console.log(text)
        setSearchText(text);
        
        const url = window.location.hostname === 'localhost' ? '/api/v1/search/book.json' : '/v1/search/book.json';
        useAxios(url, searchText).then( (res) => {
            // console.log(res)

            setBookLists(res);
        });
    }

    useEffect(() => {
        // console.log(bookLists);
    });

    return (
        <div>
            <Search searchText={searchList} />
            <BookListForm bookLists={bookLists} />
        </div>
    )
}

export default BookList