import React from 'react';
import PostItem from './PostItem';
import './PostList.css';

function PostList(props) {   
    const {posts} = props;    
    
    return(
        <div className="app-boxes post-list">
            <h2>Posts list:</h2>
            {posts.map((post)=> {
                return <PostItem title={post.title} body={post.body} key={post.id} 
                />
                }
            )}
        </div>
    )
}

export default PostList;