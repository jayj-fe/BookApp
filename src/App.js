import React from "react"
import { Route, Routes, Link } from 'react-router-dom';
import Search from './common/Search';
import MovieList from './pages/MovieList';
import MovieView from './pages/MovieView';

function App() {
    
    return (
    <div>
        <header>
            <nav>
                <Link to="/MovieApp">Home</Link>&nbsp;&nbsp;
            </nav>

            <Search />
        </header>

        <Routes>
            <Route path="/MovieApp" element={<MovieList />}></Route>
            <Route path="/MovieApp/view/:key" element={<MovieView />}></Route>
        </Routes>
    </div>
    )
}

export default App