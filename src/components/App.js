import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import Loader from './Loader';
import PostList from './PostList';
import fetchPosts from '../api/fetchPosts';
import PaginationButtonsList from './PaginationButtonsList';
const App = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const handlePage = (pageNumber) => {
      setPage(pageNumber);
    }

  useEffect(() => {
    const getData = async (page, limit) => {
      setLoading(true);
      const data = await fetchPosts(page, limit);
      setPosts(data);
      setLoading(false)
    }
    getData(page, 5);
  }, [page])
  
  return (
    <div id="main">
      
      {loading ? <Loader /> : <PostList posts= {posts}/>}
      <PaginationButtonsList page={page} handlePage={handlePage}/>
    </div>
  )
}


export default App;
