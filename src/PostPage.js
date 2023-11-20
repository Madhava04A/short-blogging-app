import React from "react";
import { useParams, Link } from "react-router-dom";
import "./App.css";

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  const property = {
    color: "blue",
    marginTop: "1rem",
    fontSize: "2rem",
    textDecoration: "none",
  };

  return (
    <div className="postPg">
      <section className="postHolder">
        {post && (
          <>
            <div className="bar">
              <h2 className="postTitle">{post.title}</h2>
              <h4 className="postTime">{post.dateTime}</h4>
            </div>
            <p className="postBody">{post.body}</p>
            <Link
              to="/short-blogging-app/"
              className="link-delete-btn">
              <button
                className="deleteBtn"
                onClick={() => handleDelete(post.id)}>
                Delete
              </button>
            </Link>
          </>
        )}
        {!post && (
          <>
            <h2 style={{ fontSize: "2rem", textAlign: "center" }}>
              Oops! Post not found.
            </h2>
            <p
              style={{
                color: "black",
                marginTop: "1rem",
                fontSize: "2rem",
                textDecoration: "none",
                textAlign: "center",
              }}>
              Click{" "}
              <Link
                to="/short-blogging-app/"
                style={property}>
                <b>HOME</b>
              </Link>{" "}
              to go back.
            </p>
          </>
        )}
      </section>
    </div>
  );
};

export default PostPage;
