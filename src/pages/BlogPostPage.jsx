import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

const BlogPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl text-gray-800 font-bold mb-6 text-blue-500  flex items-center justify-center">
        {post.title}
      </h1>
      <img
        src={`https://via.placeholder.com/600/${post.id}`}
        alt={post.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <p className="text-gray-700 mb-6 flex items-center justify-center">
        By Author
      </p>
      <p className="mb-6">{post.body}</p>
      <Link
        to="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline mb-6 block"
      >
        Author's LinkedIn
      </Link>
      <div className="flex space-x-4">
        <FacebookShareButton url={window.location.href} quote={post.title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={window.location.href} title={post.title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={window.location.href} title={post.title}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
    </div>
  );
};

export default BlogPostPage;
