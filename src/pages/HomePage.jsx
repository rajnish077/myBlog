// ... other imports
import "../index.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mx-auto py-8 px-4 fade-in">
      <h1 className="text-4xl font-bold text-center mb-12 slide-in">
        Latest Blog Posts
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <li
            key={post.id}
            className="bg-black text-blue-500 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <Link to={`/post/${post.id}`} className="block">
              <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.body.slice(0, 100)}...</p>
              <div className="text-blue-500 hover:text-blue-800 transition duration-300">
                Read more
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
