import React, { Component,useState } from 'react'
import './App.css'
import ClassCounter from './ClassCounter'
import HookCounter from './HookCounter'
import './App.css'
import Post from './Post'

 function App () {
     const [posts, setPosts] = useState([
         {
            username:"Issakaforreal",
            caption:'Wow it works',
            imageURL:'../img/react-logo.jpeg'
         },
         {
            username:"Issakaforreal",
            caption:'Wow it works',
            imageURL:'https://tinyurl.com/y3fo84xe'
         }
     ]);

         
     //https://tinyurl.com/y3fo84xe
        return (
            <div className='app'>
               <div className="app__header">
                 <img src='../img/instagram-logo.png' alt=""/>   
                </div>
              
                {
                   posts.map(post => (
                    <Post username={post.username} caption={post.caption} imageURL={post.imageURL}/>
                       
                   ))
                }
            </div>
        )
}

export default App
