// src/components/BlogList.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://backendwp.local/wp-json/wp/v2/posts")
      .then(res => res.json())
      .then(setPosts);
  }, []);

  return (
    <div className="blog-container">
      <h2>Blog Posts</h2>
      <div className="cards">
        {posts.map((post, index) => (
          <div className="card" key={post.id}>
            <img src={`/images/blog${(index % 3) + 1}.jpg`} alt="Blog" />
            <div className="card-body">
              <h3>{post.title.rendered}</h3>
              <Link to={`/post/${post.id}`} className="read-more">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
