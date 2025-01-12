import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from  './pages/homePage';
import ArticleDetailPage from './pages/articleDetailPage';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path ="/" element ={<HomePage/>} />
                <Route path ="/article/:articleId" element={<ArticleDetailPage/>}/>
            </Routes>

        </Router>

    )
}

export default App;