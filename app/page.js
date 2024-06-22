"use client";
import Navbar from "@/components/navbar";
import { Client, Databases, ID } from "appwrite";
import BlogList from "@/components/bloglist";
import { useEffect, useState } from "react";
import BlogCard from "@/components/blogcard";

export default function Home() {
  const client = new Client();

  const [blogs, setBlogs] = useState([]);

  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("6672d0290011a72caf50");

  const databases = new Databases(client);

  let promise = databases.listDocuments(
    "6672d71a002406b1dca4",
    "6672d72c00366fcf2e27",
    []
  );

  promise.then(
    function (response) {
      console.log(response);
      setBlogs(response.documents);
    },
    function (error) {
      console.log(error);
    }
  );

  function truncateHTML(html, maxLength = 100) {
    let currentLength = 0;
    let truncated = '';

    function traverse(node) {
        if (currentLength >= maxLength) {
            return;
        }
        if (node.nodeType === Node.TEXT_NODE) { // Text node
            const remainingLength = maxLength - currentLength;
            if (node.textContent.length > remainingLength) {
                truncated += node.textContent.substring(0, remainingLength) + '...';
                currentLength = maxLength;
            } else {
                truncated += node.textContent;
                currentLength += node.textContent.length;
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) { // Element node
            for (const child of node.childNodes) {
                traverse(child);
                if (currentLength >= maxLength) {
                    break;
                }
            }
        }
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    for (const child of doc.body.childNodes) {
        traverse(child);
        if (currentLength >= maxLength) {
            break;
        }
    }

    return truncated;
}


  return (
    <>
      <Navbar />
      <div>
        <main className="container mx-auto p-4">
          <h1 className="text-3xl font-bold text-blue-800 mb-6">
            Latest Blog Posts
          </h1>
          <div>
            {blogs.length == 0 && "Loading....."}
            {blogs.map((blog, index) => (
              <BlogCard key={index} {...blog} metaDesc={truncateHTML(blog.content)} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
