import React from 'react';

function PostItem(props) {
    const {title, body} = props;
    // console.log(props)
    return(
        <div className="item-border">
            <h3>{title}</h3>
            <p>{body}</p>           
        </div>
    )
}

export default PostItem;