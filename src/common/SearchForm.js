import React from "react"

function SearchForm() {
    return (
        <section>
            <select>
                <option value='movieNm'>영화명</option>
                <option value='directorNm'>감독명</option>
            </select>
            <input type="text" />
            <button type="button">검색</button>
        </section>
    )
}

export default SearchForm