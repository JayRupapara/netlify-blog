import React from 'react';
import BlogCard from './blogcard';

const BlogList = () => {
  const blogs = [
    {
      title: "Understanding React Hooks",
      author: "Jane Doe",
      metaDesc: "A comprehensive guide to understanding and using React hooks in your projects.",
    },
    {
      title: "Introduction to Next.js",
      author: "John Smith",
      metaDesc: "Learn the basics of Next.js and how it can help you build fast, SEO-friendly web applications.",
    },
    {
      title: "Tailwind CSS: A Beginner's Guide",
      author: "Alice Johnson",
      metaDesc: "An introduction to Tailwind CSS, a utility-first CSS framework for rapidly building custom designs.",
    },
    // Add more blog objects as needed
  ];

  return (
    <div className="container mx-auto p-4">
      {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          title={blog.title}
          author={blog.author}
          metaDesc={blog.metaDesc}
        />
      ))}
    </div>
  );
};

export default BlogList;
