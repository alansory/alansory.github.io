import React from 'react';
import Header from './components/Header/Header.jsx';
import Newsletter from './components/Newsletter/Newsletter.jsx';
import PostList from './components/PostList/PostList.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="blurElement leftBlurelement"/>
      <div className="blurElement rightBlurelement"/>
      <main className="main">
        <Header/>
        <Newsletter />
        <PostList />
        <Footer />
      </main>
    </div>
  );
}

export default App;