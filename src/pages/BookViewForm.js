import React from "react"
import styles from '../asset/css/View.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function BookViewForm(props) {
    
    const bookInfo = props.bookInfo
    console.log(bookInfo);
    // console.log(goBack);

    const getBack = () =>{
        props.goBack();
    }

    return (
        <section className={styles.viewForm}>
            <div className={styles.viewHeader}>
                <button type="button" onClick={getBack}>
                    <FontAwesomeIcon icon={solid("reply")} style={{color: "#ffffff",}} />
                </button>
                <a href={bookInfo.link} target="_blank">
                    <FontAwesomeIcon icon={solid("cart-shopping")} style={{color: "#ffffff",}} />
                    </a>
            </div>
            <div className={styles.viewImgArea}>
                <img src={bookInfo.image} alt="" />
            </div>
            <div className={styles.viewInfoArea}>
                <strong>{bookInfo.title}</strong>
                <dl>
                    <dt>지은이</dt>
                    <dd>{bookInfo.author}</dd>
                    
                    <dt>가격</dt>
                    <dd>{bookInfo.discount}</dd>
                    
                    <dt>출판일</dt>
                    <dd>{bookInfo.pubdate}</dd>
                    
                    <dt>출판사</dt>
                    <dd>{bookInfo.publisher}</dd>
                    
                    <dt>간략소개</dt>
                    <dd className={styles.full_size}>{bookInfo.description}</dd>
                </dl>
            </div>
        </section>
    )
}

export default BookViewForm