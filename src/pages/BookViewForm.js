import React from "react"

function BookViewForm(props) {
    
    // console.log(props)
    const bookInfo = props.bookInfo
    // console.log(bookInfo);
    // console.log(goBack);

    const getBack = () =>{
        props.goBack();
    }

    return (
        <section>
            <div>
                <button type="button" onClick={getBack}>뒤로가기</button>
                <a href={bookInfo.link} target="_blank">쇼핑하러가기</a>
            </div>
            <div>
                <img src={bookInfo.image} alt="" />
            </div>
            <div>
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
                    <dd>{bookInfo.description}</dd>
                </dl>
            </div>
        </section>
    )
}

export default BookViewForm