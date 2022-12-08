import logo from './logo.svg';
import Header from './Components/header';
import Footer from './Components/footer';
import {User} from './Components/User'
import { CommentsCont } from './Containers/CommentsCont'
import {SearchCont} from './Containers/SearchCont'
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { getStoryIds } from './Services/hnApi'
import { StoriesContainers } from './Containers/StoriesContainers';
import { TopStoriesCont } from './Containers/TopStoriesCont';
import { BestStoriesCont } from './Containers/BestStoriesCont';
import './App.css';

function App() {
  const [storyIds, setStoryIds] = useState([]);
  useEffect(() => {
    console.log(getStoryIds().then(data => setStoryIds(data)));
  }, []);
  return (
    <>
      <Router>
        <Header searchbar={true} title="Hacker News" />
        <Routes>
          <Route exact path="/" element={<StoriesContainers />}></Route>
          <Route exact path="/Top" element={<TopStoriesCont />}></Route>
          <Route exact path="/Best" element={<BestStoriesCont />}></Route>
          <Route exact path="/Comment/:storyid" element={<CommentsCont />}></Route>
          <Route exact path="/User/:user" element={<User />}></Route>
          <Route exact path="/Search/:keyword" element={<SearchCont />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
