"use client";
import { Client, Databases, ID } from "appwrite";
import { useEffect, useState } from "react";

export default function Home() {
  const client = new Client();

  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("6672d0290011a72caf50");

  const databases = new Databases(client);

  let a = [
    {
      "title": "Learn JavaScript",
      "content": "<h1>Welcome to JavaScript</h1>\n<p>JavaScript is a versatile and powerful programming language used for web development, among many other things. Whether you're just starting out or looking to deepen your understanding, this guide will provide you with a solid foundation.</p>\n<h2>Getting Started</h2>\n<p>Before diving into JavaScript, ensure you have a text editor or an integrated development environment (IDE) set up. Popular choices include VSCode, Sublime Text, and Atom.</p>\n<h3>Basic Syntax</h3>\n<p>JavaScript syntax is the set of rules that define a correctly structured JavaScript program. Here are some basics:</p>\n<ul>\n  <li><strong>Variables:</strong> Used to store data values. Example: <code>let x = 10;</code></li>\n  <li><strong>Functions:</strong> Blocks of code designed to perform a particular task. Example: <code>function greet() { console.log('Hello, world!'); }</code></li>\n  <li><strong>Events:</strong> Code that executes in response to actions taken by the user. Example: <code>document.getElementById('myBtn').onclick = function() { alert('Button clicked!'); };</code></li>\n</ul>\n<h2>Advanced Topics</h2>\n<p>Once you're comfortable with the basics, you can explore more advanced topics like:</p>\n<ul>\n  <li><strong>Asynchronous Programming:</strong> Understanding callbacks, promises, and async/await.</li>\n  <li><strong>APIs and AJAX:</strong> How to fetch data from servers.</li>\n  <li><strong>Frameworks and Libraries:</strong> Exploring tools like React, Angular, and Vue.js.</li>\n</ul>\n<h2>Conclusion</h2>\n<p>JavaScript is an essential skill for modern web development. With practice and dedication, you can become proficient and build amazing projects. Happy coding!</p>",
      "slug": "learn-javascript",
      "views": 0,
      "author": "John Doe",
      "is_published": true
    },
    {
      "title": "Mastering CSS",
      "content": "<h1>Mastering CSS</h1>\n<p>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in HTML or XML. Learn how to create visually appealing web pages with this guide.</p>\n<h2>Getting Started</h2>\n<p>Start with the basics of CSS by understanding the syntax and how to link CSS files to HTML documents.</p>\n<h3>Basic Syntax</h3>\n<p>CSS syntax consists of a set of rules. Each rule has a selector and a declaration block. Example:</p>\n<pre><code>body {\n  background-color: lightblue;\n}</code></pre>\n<h2>Advanced Topics</h2>\n<p>Once you're comfortable with basic CSS, move on to:</p>\n<ul>\n  <li><strong>Responsive Design:</strong> Making web pages look good on all devices.</li>\n  <li><strong>Flexbox and Grid:</strong> Advanced layout techniques.</li>\n  <li><strong>Animations and Transitions:</strong> Adding dynamic effects to your pages.</li>\n</ul>\n<h2>Conclusion</h2>\n<p>CSS is a crucial part of web development that allows you to create beautiful, responsive designs. Practice regularly to enhance your skills.</p>",
      "slug": "mastering-css",
      "views": 0,
      "author": "Jane Smith",
      "is_published": true
    },
    {
      "title": "Introduction to HTML",
      "content": "<h1>Introduction to HTML</h1>\n<p>HTML (Hypertext Markup Language) is the standard markup language for creating web pages. This guide will help you understand the basics and get started with HTML.</p>\n<h2>Getting Started</h2>\n<p>HTML elements are the building blocks of HTML pages. Learn how to structure a simple webpage with HTML tags.</p>\n<h3>Basic Syntax</h3>\n<p>HTML documents are made up of elements, represented by tags. Example:</p>\n<pre><code>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n&lt;head&gt;\n  &lt;title&gt;My First HTML Page&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;h1&gt;Hello, World!&lt;/h1&gt;\n&lt;/body&gt;\n&lt;/html&gt;</code></pre>\n<h2>Advanced Topics</h2>\n<p>After mastering the basics, explore:</p>\n<ul>\n  <li><strong>Forms and Input:</strong> Creating interactive forms for user input.</li>\n  <li><strong>Semantic HTML:</strong> Using elements to convey the meaning of content.</li>\n  <li><strong>Multimedia:</strong> Embedding images, videos, and audio.</li>\n</ul>\n<h2>Conclusion</h2>\n<p>HTML is the foundation of web development. Understanding HTML is crucial for building effective and structured web pages.</p>",
      "slug": "introduction-to-html",
      "views": 0,
      "author": "Alice Johnson",
      "is_published": true
    },
    {
      "title": "Understanding Python",
      "content": "<h1>Understanding Python</h1>\n<p>Python is a high-level, interpreted programming language known for its readability and versatility. This guide will introduce you to Python and help you start coding.</p>\n<h2>Getting Started</h2>\n<p>Before you begin, ensure you have Python installed on your computer. Download it from the official Python website.</p>\n<h3>Basic Syntax</h3>\n<p>Python syntax is designed to be easy to read and write. Example:</p>\n<pre><code>print('Hello, World!')</code></pre>\n<h2>Advanced Topics</h2>\n<p>Once you're comfortable with the basics, dive into:</p>\n<ul>\n  <li><strong>Data Structures:</strong> Lists, dictionaries, sets, and tuples.</li>\n  <li><strong>Object-Oriented Programming:</strong> Classes and objects.</li>\n  <li><strong>Libraries and Frameworks:</strong> Utilizing tools like NumPy, pandas, and Django.</li>\n</ul>\n<h2>Conclusion</h2>\n<p>Python is a powerful language that is widely used in various fields, from web development to data science. Keep practicing to become proficient.</p>",
      "slug": "understanding-python",
      "views": 0,
      "author": "Bob Brown",
      "is_published": true
    },
    {
      "title": "Exploring React",
      "content": "<h1>Exploring React</h1>\n<p>React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of developers. Learn how to create dynamic web applications with React.</p>\n<h2>Getting Started</h2>\n<p>Start by setting up a React development environment. Create a new React app using Create React App.</p>\n<h3>Basic Syntax</h3>\n<p>React components are the building blocks of a React application. Example:</p>\n<pre><code>function App() {\n  return (\n    &lt;div&gt;\n      &lt;h1&gt;Hello, React!&lt;/h1&gt;\n    &lt;/div&gt;\n  );\n}</code></pre>\n<h2>Advanced Topics</h2>\n<p>After mastering the basics, explore:</p>\n<ul>\n  <li><strong>State and Props:</strong> Managing data within components.</li>\n  <li><strong>Lifecycle Methods:</strong> Handling component lifecycle events.</li>\n  <li><strong>Hooks:</strong> Using useState and useEffect to manage state and side effects.</li>\n</ul>\n<h2>Conclusion</h2>\n<p>React is a powerful tool for building modern web applications. Practice and build projects to become proficient in React.</p>",
      "slug": "exploring-react",
      "views": 0,
      "author": "Charlie Davis",
      "is_published": true
    },
    {
      "title": "Node.js for Beginners",
      "content": "<h1>Node.js for Beginners</h1>\n<p>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server side. This guide will introduce you to Node.js and help you get started.</p>\n<h2>Getting Started</h2>\n<p>Install Node.js from the official website and set up a simple project.</p>\n<h3>Basic Syntax</h3>\n<p>Create a basic server using Node.js. Example:</p>\n<pre><code>const http = require('http');\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'text/plain');\n  res.end('Hello, World!');\n});\nserver.listen(3000, () => {\n  console.log('Server running at http://localhost:3000/');\n});</code></pre>\n<h2>Advanced Topics</h2>\n<p>Once you're comfortable with the basics, dive into:</p>\n<ul>\n  <li><strong>Express.js:</strong> A web application framework for Node.js.</li>\n  <li><strong>Asynchronous Programming:</strong> Understanding callbacks, promises, and async/await.</li>\n  <li><strong>Database Integration:</strong> Using MongoDB with Node.js.</li>\n</ul>\n<h2>Conclusion</h2>\n<p>Node.js is a powerful tool for building server-side applications. Practice and build projects to enhance your skills.</p>",
      "slug": "nodejs-for-beginners",
      "views": 0,
      "author": "Diane Evans",
      "is_published": true
    },
    {
      "title": "Getting Started with Vue.js",
      "content": "<h1>Getting Started with Vue.js</h1>\n<p>Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable. This guide will help you start building applications with Vue.js.</p>\n<h2>Getting Started</h2>\n<p>Set up a Vue.js development environment and create a new Vue project using Vue CLI.</p>\n<h3>Basic Syntax</h3>\n<p>Vue components are the building blocks of a Vue application. Example:</p>\n<pre><code>&lt;template&gt;\n  &lt;div&gt;\n    &lt;h1&gt;Hello, Vue!&lt;/h1&gt;\n  &lt;/div&gt;\n&lt;/template&gt;\n&lt;script&gt;\nexport default {\n  name: 'App'\n}\n&lt;/script&gt;</code></pre>\n<h2>Advanced Topics</h2>\n<p>Once you're comfortable with the basics, explore:</p>\n<ul>\n  <li><strong>Vue Router:</strong> Adding routing to your application.</li>\n  <li><strong>Vuex:</strong> State management for Vue applications.</li>\n  <li><strong>Single File Components:</strong> Structuring your code with .vue files.</li>\n</ul>\n<h2>Conclusion</h2>\n<p>Vue.js is a versatile framework that can be used for building complex applications. Practice and build projects to become proficient in Vue.js.</p>",
      "slug": "getting-started-with-vuejs",
      "views": 0,
      "author": "Ethan Foster",
      "is_published": true
    },
    {
      "title": "Introduction to Angular",
      "content": "<h1>Introduction to Angular</h1>\n<p>Angular is a platform for building mobile and desktop web applications. It provides a framework for client-side MVC architectures. This guide will help you start building applications with Angular.</p>\n<h2>Getting Started</h2>\n<p>Set up an Angular development environment and create a new Angular project using Angular CLI.</p>\n<h3>Basic Syntax</h3>\n<p>Angular components are the building blocks of an Angular application. Example:</p>\n<pre><code>&lt;!-- app.component.html --&gt;\n&lt;h1&gt;Hello, Angular!&lt;/h1&gt;\n&lt;!-- app.component.ts --&gt;\nimport { Component } from '@angular/core';\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  title = 'app';\n}</code></pre>\n<h2>Advanced Topics</h2>\n<p>After mastering the basics, explore:</p>\n<ul>\n  <li><strong>Services and Dependency Injection:</strong> Sharing data between components.</li>\n  <li><strong>Routing:</strong> Adding navigation to your application.</li>\n  <li><strong>Reactive Forms:</strong> Building complex forms with validation.</li>\n</ul>\n<h2>Conclusion</h2>\n<p>Angular is a powerful framework for building modern web applications. Practice and build projects to become proficient in Angular.</p>",
      "slug": "introduction-to-angular",
      "views": 0,
      "author": "Fiona Green",
      "is_published": true
    },
    {
      "title": "Diving into TypeScript",
      "content": "<h1>Diving into TypeScript</h1>\n<p>TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing to the language. This guide will introduce you to TypeScript and its features.</p>\n<h2>Getting Started</h2>\n<p>Install TypeScript and set up a development environment. Use the TypeScript compiler to transpile TypeScript code to JavaScript.</p>\n<h3>Basic Syntax</h3>\n<p>TypeScript adds types to JavaScript. Example:</p>\n<pre><code>let message: string = 'Hello, TypeScript!';\nfunction greet(name: string): string {\n  return `Hello, ${name}!`;\n}</code></pre>\n<h2>Advanced Topics</h2>\n<p>Once you're comfortable with the basics, dive into:</p>\n<ul>\n  <li><strong>Interfaces:</strong> Defining contracts for objects.</li>\n  <li><strong>Generics:</strong> Creating reusable components.</li>\n  <li><strong>Decorators:</strong> Adding metadata to classes and methods.</li>\n</ul>\n<h2>Conclusion</h2>\n<p>TypeScript enhances JavaScript development with strong typing and modern features. Practice and build projects to become proficient in TypeScript.</p>",
      "slug": "diving-into-typescript",
      "views": 0,
      "author": "George Harris",
      "is_published": true
    },
    {
      "title": "Learning SQL",
      "content": "<h1>Learning SQL</h1>\n<p>Structured Query Language (SQL) is a standard language for managing and manipulating databases. This guide will introduce you to SQL and help you start working with databases.</p>\n<h2>Getting Started</h2>\n<p>Set up a database management system (DBMS) such as MySQL, PostgreSQL, or SQLite, and connect to a database.</p>\n<h3>Basic Syntax</h3>\n<p>SQL syntax is used to perform various operations on data. Example:</p>\n<pre><code>CREATE TABLE users (\n  id INT PRIMARY KEY,\n  name VARCHAR(100),\n  email VARCHAR(100)\n);\nINSERT INTO users (id, name, email) VALUES (1, 'John Doe', 'john.doe@example.com');\nSELECT * FROM users;</code></pre>\n<h2>Advanced Topics</h2>\n<p>Once you're comfortable with the basics, explore:</p>\n<ul>\n  <li><strong>Joins:</strong> Combining rows from multiple tables.</li>\n  <li><strong>Subqueries:</strong> Nested queries for complex data retrieval.</li>\n  <li><strong>Indexes:</strong> Optimizing database performance.</li>\n</ul>\n<h2>Conclusion</h2>\n<p>SQL is an essential skill for managing data in relational databases. Practice regularly to enhance your database management skills.</p>",
      "slug": "learning-sql",
      "views": 0,
      "author": "Hannah Brown",
      "is_published": true
    }
  ]

  for (let index = 0; index < a.length; index++) {
    const element = a[index];

  const promise = databases.createDocument(
    "6672d71a002406b1dca4",
    "6672d72c00366fcf2e27",
    ID.unique(),
    element
    
  );

  promise.then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
  }
  return (
    <>
      navbar here
      <div>apphere</div>
    </>
  );
}
