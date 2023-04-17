import React from "react"
// import { Link } from 'react-router-dom';
import styles from '../asset/css/List.module.css';

function BookListForm({bookLists}) {
    if(bookLists === undefined){
        bookLists = [];
    }

    console.log(bookLists);
    
    return (
        <section className={styles.listForm}>
            <p className={styles.listCount}>{bookLists.length}개가 검색되었습니다.</p>
            <ul className={styles.listItemArea}>
                { bookLists.length > 0 ? 
                    bookLists && bookLists.map( item => (
                        <li key={item.isbn} className={styles.listItem}>
                            <div>
                                <img src={item.image} alt="" />
                                <strong>{item.title}</strong>
                                <p>{item.author}</p>
                                {/* <Link to="/MovieApp/view/:key" state={item.movieCd}>{item.title}</Link> */}
                            </div>
                        </li>
                    ))
                
                    : <li className={styles.listNodata}>
                        검색어를 입력해주세요
                    </li>
                }
            </ul>
        </section>
    )
}

export default BookListForm