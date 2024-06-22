import React from 'react';
import Link from 'next/link';

const BlogCard = ({ title, author, metaDesc , readMoreLink , slug }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-blue-800 mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{metaDesc}</p>
      <p className="text-gray-600 mb-4">by {author}</p>
      <Link 
        href={"/blogpost/"+ slug} 
        className="bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer">
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
