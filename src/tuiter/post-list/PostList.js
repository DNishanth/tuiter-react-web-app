import React from "react";
import PostItem from "./PostItem.js";
import posts from "./posts.js"

const PostList = () => {
    return (
        <div className="list-group mb-2">
            {
                posts.map(post => <PostItem/>)
            }
        </div>
    );
}
export default PostList;