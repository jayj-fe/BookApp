import React, { useRef,useEffect } from "react"
import styles from '../asset/css/List.module.css';

function BookListForm(props) {
    const bookLists = props.bookLists;
    const obsRef = useRef();

    if(bookLists === undefined){
        bookLists = [];
    }
    
    const pageMove = (linkUrl, stateProp) =>{
        props.pageMove(linkUrl, stateProp)
    }

    useEffect(() => {
        props.obsElem(obsRef);
    });

    return (
        <section className={styles.listForm}>
            <p className={styles.listCount}>{bookLists.length}개가 검색되었습니다.</p>
            <ul className={styles.listItemArea}>
                { bookLists.length > 0
                    ? <>
                        { bookLists && bookLists.map( item => (
                            <li key={item.isbn} className={styles.listItem}>
                                {/* <button type="button" className={styles.itemLink} onClick={pageMove(`/BookApp/view/${item.isbn}`, { item })}> */}
                                <button type="button" className={styles.itemLink} onClick={()=> pageMove(`/BookApp/view/${item.title}`, { item })}>
                                    <div className={styles.itemImg}>
                                        <img src={item.image} alt="" />
                                    </div>
                                    <strong>{item.title}</strong>
                                </button>
                            </li>
                        ))}
                        <li ref={obsRef}>&nbsp;</li>
                    </>
                    : <li className={styles.listNodata}>
                        검색어를 입력해주세요
                    </li>
                }
            </ul>
        </section>
    )
}

export default BookListForm