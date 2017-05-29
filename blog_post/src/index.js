import React from 'react';
import ReactDOM from 'react-dom';
import Post from './App.js';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

var post = {
  title: "Dinosaurs are awesome",
  author: "Stealthy Stegosaurus",
  body: "Check out this body property!",
  comments: ["First!", "Great post", "Hire this author now!"]
}

var authors = ["Stealthy Stegosaurus", "Tiny Trex", "Ivory Iguanadon"]

ReactDOM.render(
  <Post title={post.title} author={post.author} body={post.body} comments={post.comments} allAuthors={authors}/>,
  document.getElementById('root')
);
registerServiceWorker();
