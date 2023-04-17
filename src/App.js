import React from "react"
import { Route, Routes } from 'react-router-dom';
import BookList from './pages/BookList';
import styles from './asset/css/App.module.css';
// import BookView from './pages/BookView';

function App() {
    return (
    <section className={styles.app}>
        <Routes>
            <Route path="/" element={<BookList />}></Route>
            <Route path="/MovieApp" element={<BookList />}></Route>
            {/* <Route path="/MovieApp/view/:key" element={<BookView />}></Route> */}
        </Routes>
    </section>
    )
}

export default App