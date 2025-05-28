// src/pages/About.jsx
import { useEffect, useState } from "react";

export default function Contact() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    fetch("http://backendwp.local/wp-json/wp/v2/pages?slug=contact")
      .then(res => res.json())
      .then(data => setPage(data[0]));
  }, []);

  if (!page) return <p>Loading...</p>;

  return (
    <div className="page-content">
      <h2>{page.title.rendered}</h2>
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
    </div>
  );
}
