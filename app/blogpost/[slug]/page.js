"use client"
import React from 'react'
import Navbar from '@/components/navbar'
import { useState } from 'react'
import { Client, Databases, ID, Query } from "appwrite";


export default function Page({ params }) {
    // const [blog, setblog] = useState()
    const client = new Client();

    const [blogs, setBlogs] = useState([]);
  
    client
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("6672d0290011a72caf50");
  
    const databases = new Databases(client);
  
    let promise = databases.listDocuments(
      "6672d71a002406b1dca4",
      "6672d72c00366fcf2e27",
      [
        Query.equal('slug', params.slug)
      ]
    );
  
    promise.then(
      function (response) {
        console.log(response);
        setBlogs(response.documents[0]);
      },
      function (error) {
        console.log(error);
      }
    );
    return (
        <>
        <Navbar />
        <div>
          <main className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-blue-800 mb-6">
              {blogs?.title}
            </h1>
            <div>
              {!blogs && "Loading....."}
              <div className="font-bold italic text-sm">Author: {blogs?.author}</div>
              <div className="shadow-xl p-8" dangerouslySetInnerHTML={{__html: blogs?.content}}></div>
              {/* {blogs?.content} */}
            </div>
          </main>
        </div>
      </>
    )
}