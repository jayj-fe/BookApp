import React from "react"
import SearchForm from './SearchForm';

function Search( props ) {
    // seacrh 기능
    const searchText = (text) => {
        // console.log(text)
        props.searchText(text);
    }
    
    return (
        <SearchForm searchInputText={searchText}/>
    )
}

export default Search