import React, { useState, useEffect } from "react"
import SearchForm from './SearchForm';

function Search( props ) {
    // seacrh 기능

    let typingTimer;
    const doneTypingInterval = 300;
    const [serachInput, setSerachInput] = useState('');
    const [inputele, setInputele] = useState('');

    const keyUpEvent = () => {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(getValue, doneTypingInterval);
    };

    const keyDownEvent = () => {
        clearTimeout(typingTimer);
    };

    const getValue = () => {
        const typing = inputele.value;
        // console.log(typing);
        setSerachInput(typing);
        props.searchText(typing);
    };

    const inputElem = (inputele) => {
        setInputele(inputele.current);
    }

    return (
        <SearchForm keyUpEvent={keyUpEvent} keyDownEvent={keyDownEvent} getValue={getValue} inputElem={inputElem} />
    )
}

export default Search