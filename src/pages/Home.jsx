// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="hero">
      <div className="overlay">
        <h3>AMBITION IS THE FIRST STEP TOWARDS</h3>
        <h1>SUCCESS</h1>
        <p>Explore Blog Posts</p>
        <Link to="/blog" className="hero-btn">Continue</Link>
      </div>
    </div>
  );
}
