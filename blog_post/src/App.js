import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//load in the comment component
import About from './About.js';
import Main from './Main.js';
import Post from './Post.js';

var post = {
  title: "Dinosaurs are awesome",
  author: "Stealthy Stegosaurus",
  body: "Check out this body property!",
  comments: ["First!", "Great post", "Hire this author now!"]
}

var authors = ["Stealthy Stegosaurus", "Tiny Trex", "Ivory Iguanadon"]

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>{' '}
            <Link to="/blog">Blog</Link>{' '}
            <Link to="/about">About</Link>
          </nav>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/blog" component={
            () => (<Post title={post.title}
                      allAuthors={authors}
                      body={post.body}
                      comments={post.comments} />
            )}/>
          <Route exact path="/about" component={
              () => (<About me={authors[0]} />
          )}/>
        </div>
      </Router>
    )
  }
}

export default App
