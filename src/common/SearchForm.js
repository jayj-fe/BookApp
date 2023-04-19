import React, { useRef } from "react"
import styles from '../asset/css/Search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useState } from "react"

function SearchForm( props ) {
    const [serachInput, setSerachInput] = useState('');

    const searchInput = useRef();

    const getValue = (e) => {
        setSerachInput( e.target.value.toLowerCase() )
        props.searchInputText(serachInput);
    };

    const submitFn = (e) => {
        console.log(searchInput.current);
        setSerachInput( searchInput.current.value.toLowerCase() )
        props.searchInputText(serachInput);
    };

    return (
        <section className={styles.searchForm}>
            <div>
                <input type="text" placeholder="검색어를 입력하세요" onKeyUp={getValue} ref={searchInput} />
                <button type="button" onClick={submitFn} ><FontAwesomeIcon icon={solid("magnifying-glass")} style={{color: "#ffffff",}} /></button>
            </div>
        </section>
    )
}

export default SearchForm