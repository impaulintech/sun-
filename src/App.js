/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'
import Nav from "./component/Nav"
import Article from "./component/Article"
import Thumbnail from './component/Thumbnail';


function App() {
  const [article, setArticle] = useState([])
  const [upvote, setUpvote] = useState(0)
  const [downvote, setDownvote] = useState(0)

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts")
      .then((result) => {
        setArticle(result.data)
      })

  }, [])

  return (
    <>
      <Nav />
      <Thumbnail
        article={article}
        upvote={upvote}
        downvote={downvote}
        setUpvote={setUpvote}
        setDownvote={setDownvote} />
    </>
  );
}

export default App;
