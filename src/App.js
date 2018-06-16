import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const App = () => {
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/friends' component={Friends} />
    </BrowserRouter>
}

const Home = () => (
    <div>
        <h2>Home</h2>
        <p>Welcome to ようこそ</p>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
        <p>フレンスに投票するページです</p>
    </div>
)

const Friends = () => (
    <div>
        <h2>Friends</h2>
        <p>ここにフレンスのリストを書きます</p>
    </div>
)

export default App