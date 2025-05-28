// src/components/SinglePost.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://backendwp.local/wp-json/wp/v2/posts/${id}`)
      .then(res => res.json())
      .then(setPost);
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="single-post">
      <h2>{post.title.rendered}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
}
