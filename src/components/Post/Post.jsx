import React from 'react';
import './Post.css';

function Post({ post }) {
  return (
    <article className="post">
      <p className="meta">
        {post.date} • {post.tags.map(tag => `#${tag}`).join(' ')}
      </p>
      <h3 className="title">{post.title}</h3>
    </article>
  );
}

export default Post;