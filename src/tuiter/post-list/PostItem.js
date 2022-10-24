import React from "react";
const PostItem = (post) => {
    return(
        <div className="wd-topic-item wd-flex-container list-group-item wd-post">
            <img className="wd-author-image" height="10px" width="10px" src={`/images/${post.author_image}`}/>
            <div>
                <div className="wd-flex-text">
                    <div className="wd-heading-black">{post.author}&nbsp;</div>
                    <i className="fa fa-check-circle"></i>
                    <div className="text-secondary">&nbsp;@{post.handle} · {post.time}</div>
                </div>
                <div>{post.body}</div>
                <div className="{post.embed ? 'wd-embed-container' : ''} mb-3 mt-2">
                    <img className="wd-embed-image" width="100%" height="300px" src="/images/{post.image}"/>
                    <div className="{post.embed ? 'wd-image-body-container' : 'wd-hide'}">
                        <div>{post.image_title}</div>
                        <div className="text-secondary">{post.image_body}</div>
                        <i className="fa fa-link text-secondary"><span className="text-secondary wd-link-text"> {post.image_link}</span></i>
                    </div>
                </div>
                <div className="row">
                    <i className="fa fa-message col-3 wd-icon-color"><span className="text-secondary ms-3 wd-link-text"> {post.comments}</span></i>
                    <i className="fa fa-retweet col-3 wd-icon-color"><span className="text-secondary ms-3 wd-link-text"> {post.retweets}</span></i>
                    <i className="fa fa-heart col-3 wd-icon-color"><span className="text-secondary ms-3 wd-link-text"> {post.likes}</span></i>
                    <i className="fa fa-upload col-3 wd-icon-color"><span className="text-secondary ms-3 wd-link-text"></span></i>
                </div>
            </div>
        </div>
    );
}
export default PostItem;