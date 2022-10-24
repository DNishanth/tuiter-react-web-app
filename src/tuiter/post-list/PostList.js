import React from "react";
import PostItem from "./PostItem.js";
import postsArray from "./posts.json"

const PostList = () => {
    return (
        <div className="list-group mb-2">
            {
                postsArray.map(post =>
                    <PostItem
                        key={post._id} post={post}/>)
            }
        </div>
    );
}
export default PostList;