import React from "react"
import { Link } from 'react-router-dom';
import styles from '../asset/css/List.module.css';

function BookListForm({bookLists}) {
    if(bookLists === undefined){
        bookLists = [];
    }

    // console.log(bookLists);
    let count = 0;

    count = count + bookLists.length;
    
    return (
        <section className={styles.listForm}>
            <p className={styles.listCount}>{count}개가 검색되었습니다.</p>
            <ul className={styles.listItemArea}>
                { bookLists.length > 0 ? 
                    bookLists && bookLists.map( item => (
                        <li key={item.isbn} className={styles.listItem}>
                            <Link to={`/BookApp/view/${item.isbn}`} state={ item } >
                                <div className={styles.itemImg}>
                                    <img src={item.image} alt="" />
                                </div>
                                <strong>{item.title}</strong>
                            </Link>
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