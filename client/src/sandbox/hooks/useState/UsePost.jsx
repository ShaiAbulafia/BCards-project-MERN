import React, { useState } from "react";

const UsePost = () => {
  const INITIAL_POST = {
    title: "",
    subtitle: "",
    author: "",
    createdAt: "",
  };

  const [post, setPost] = useState(INITIAL_POST);
  const [posts, setPosts] = useState([]);

  const createNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...post, createdAt: new Date().toLocaleString() }]);
    return setPost(INITIAL_POST);
  };
  return (
    <>
      <input
        type="text"
        value={post.title}
        placeholder="Title"
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <input
        type="text"
        value={post.subtitle}
        placeholder="Subtitle"
        onChange={(e) => setPost({ ...post, subtitle: e.target.value })}
      />
      <input
        type="text"
        value={post.author}
        placeholder="Author"
        onChange={(e) => setPost({ ...post, author: e.target.value })}
      />
      <button
        disabled={!post.title || !post.subtitle || !post.author}
        onClick={createNewPost}
      >
        Create
      </button>
      {!!posts.length && (
        <table>
          <thead>
            <tr>
              <th>index</th>
              <th>Title</th>
              <th>Subtitle</th>
              <th>Author</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{post.title}</td>
                <td>{post.subtitle}</td>
                <td>{post.author}</td>
                <td>{post.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default UsePost;
