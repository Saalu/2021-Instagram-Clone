import React from 'react'
import './Post.css';
import Avatar from '@material-ui/core/Avatar'
function Post({imageURL}) {
    return (
        <div className='post'>
           <div className="post__header">
           <Avatar
            className='post__avatar'
            alt='saalih'
            src='../img/salwa.jpg'
            />
            <h3>Username</h3>
           </div>
            {/* header -> avatar = username */}
            <img className='post__image' src={imageURL} alt=""/>
                        
            {/* image */}

            <h4 className='post__text'><strong>saaluissaka</strong> Wow! I coding with react</h4>
            {/* Username: caption */}
        </div>
    )
}

export default Post
