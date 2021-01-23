import React, { Component,useState,useEffect } from 'react'
import './App.css'
import ClassCounter from './ClassCounter'
import HookCounter from './HookCounter'
import './App.css'
import Post from './Post'
import {db} from './firebase'
 function App () {
     const [posts, setPosts] = useState([]);

    useEffect(() => {
       db.collection('posts').onSnapshot(snapshot => {
           setPosts(snapshot.docs.map(doc => doc.data()))
        })
     },[])
         
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
