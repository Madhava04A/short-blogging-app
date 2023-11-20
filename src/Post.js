import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <Link
      to={`/short-blogging-app/post/${post.id}`}
      className="postLink">
      <article className="article">
        <p className="dateTime">{post.dateTime}</p>
        <h2 className="Title">{post.title}</h2>
        <p className="postText">
          {post.body.length <= 50 ? post.body : `${post.body.slice(0, 150)}...`}
        </p>
      </article>
    </Link>
  );
};

export default Post;
