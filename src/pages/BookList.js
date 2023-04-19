import React, { useState } from "react"
import Search from '../common/Search';
import BookListForm from './BookListForm';
import useAxios from '../hooks/useAxios';

function BookList() {
    // List 기능
    const [pageHistory, setPageHistory] = useState({});
    const [searchText, setSearchText] = useState('');
    const [bookLists, setBookLists] = useState([]);

    const searchList = (text) => {
        // console.log(text);
        setSearchText(text);
        
        if(text === ''){
            setBookLists([]);
            setPageHistory({
                idx : 1,
                searchTxt : text
            })
        }else{
            useAxios('/api/v1/search/book.json', text, 1).then( (res) => {
                // console.log(res)
    
                setBookLists(res.data);
                // console.log(res.pageIdx)
                setPageHistory({
                    idx : 1,
                    searchTxt : searchText
                })
            });
        }
    }

    // useEffect(() => {
    //     // console.log(bookLists);
    // });

    return (
        <div>
            <Search searchText={searchList} pageHistory={pageHistory} />
            <BookListForm bookLists={bookLists} />
        </div>
    )
}

export default BookList