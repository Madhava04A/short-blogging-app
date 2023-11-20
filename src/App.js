import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";
import "./index.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";

function App() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "post 1",
      dateTime: "Mar 4, 2003 01:00:00 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque saepe nihil quae suscipit magnam possimus perferendis, quod distinctio voluptatem molestiae est culpa ullam dolorem eligendi id officiis architecto ipsum corrupt",
    },
    {
      id: 2,
      title: "second post",
      dateTime: "Oct 9, 2021 11:00:00 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque saepe nihil quae suscipit magnam possimus perferendis, quod distinctio voluptatem molestiae est culpa ullam dolorem eligendi id officiis architecto ipsum corrupt",
    },
    {
      id: 3,
      title: "meet",
      dateTime: "Mar 7, 2025 11:30:00 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque saepe nihil quae suscipit magnam possimus perferendis, quod distinctio voluptatem molestiae est culpa ullam dolorem eligendi id officiis architecto ipsum corrupt",
    },
  ]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMM dd, yyyy pp");
    const newPost = {
      id,
      title: postTitle,
      dateTime: datetime,
      body: postBody,
    };
    setPosts([...posts, newPost]);
    setPostTitle("");
    setPostBody("");
    navigate("/short-blogging-app/");
  }

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  function handleDelete(id) {
    const postList = posts.filter((post) => post.id !== id);
    setPosts(postList);
  }

  return (
    <div className="App">
      <Header />
      <Nav
        search={search}
        setSearch={setSearch}
      />
      <main className="main-container">
        <Routes>
          <Route
            path="/short-blogging-app/"
            index
            element={<Home posts={searchResults} />}
          />
          <Route
            path="/short-blogging-app/about"
            element={<About />}
          />
          <Route
            path="/short-blogging-app/newpost"
            element={
              <NewPost
                handleSubmit={handleSubmit}
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postBody={postBody}
                setPostBody={setPostBody}
              />
            }
          />
          <Route
            path="/short-blogging-app/post/:id"
            element={
              <PostPage
                posts={posts}
                handleDelete={handleDelete}
              />
            }
          />
          <Route
            path="*"
            element={<Missing />}
          />
        </Routes>
      </main>
      <Footer posts={posts} />
    </div>
  );
}

export default App;
