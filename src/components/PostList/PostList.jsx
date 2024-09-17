import React from 'react';
import Post from '../Post/Post';
import './PostList.css';

function PostList() {
  const posts = [
    { date: '2024 Apr 29', tags: ['python', 'machine-learning', 'llm'], title: 'Your Post Title' },
    { date: '2024 Apr 15', tags: ['javascript', 'react'], title: 'Another Post Title' },
  ];

  return (
    <section className="posts">
      <h2 className="postTitle">Posts:</h2>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </section>
  );
}

export default PostList;