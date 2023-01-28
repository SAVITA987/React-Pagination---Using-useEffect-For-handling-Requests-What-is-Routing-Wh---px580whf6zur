import React from 'react'
const Post = ({body, title}) => {
    return (
        <div className="post">
            <h3 className='title'>{title}</h3>
            <p className='body'>{body}</p>
        </div>
    )
}

export default Post
