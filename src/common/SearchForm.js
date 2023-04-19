import React, { useRef, useEffect } from "react"
import styles from '../asset/css/Search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function SearchForm( props ) {
    // console.log(props);
    const inputElem = useRef();
    const { keyUpEvent, keyDownEvent, getValue } = props;

    // useEffect(() => {
    //     console.log('useEffect start')
    //     console.log(props.pageHistory);
    //     console.log(typeof props.pageHistory.searchTxt);
    //     if( typeof props.pageHistory.searchTxt === 'string'){
    //         checkText();
    //     }
    // }, []);

    useEffect(() => {
        props.inputElem(inputElem);
    }, []);

    return (
        <section className={styles.searchForm}>
            <div>
                <input type="text" placeholder="검색어를 입력하세요" onKeyUp={keyUpEvent} onKeyDown={keyDownEvent} ref={inputElem} />
                <button type="button" onClick={getValue} ><FontAwesomeIcon icon={solid("magnifying-glass")} style={{color: "#ffffff",}} /></button>
            </div>
        </section>
    )
}

export default SearchForm