import React from "react";
import "./index.css";

const PostItem = (
    {
        post = {
            "author": "Elon Musk",
            "handle": "elonmusk",
            "time": "23h",
            "body": "Amazing show about <a href=\"#\"> @Inspiration4x</a> mission!",
            "image": "countdown.jpg",
            "image_title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "image_body": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
            "image_link": "netflix.com",
            "author_image": "rocket.jpg",
            "comments": "4.2K",
            "retweets": "3.5K",
            "likes": "37.5K",
            "embed": true
        }
    }
) => {
    return(
        <div className="wd-topic-item list-group-item wd-flex-container wd-post wd-explore-item">
            <img className="wd-author-image" height="10px" width="10px" src={`/images/${post.author_image}`}/>
            <div>
                <div className="wd-flex-text">
                    <div className="wd-heading-black">{post.author}&nbsp;</div>
                    <i className="fa fa-check-circle"></i>
                    <div className="text-secondary">&nbsp;@{post.handle} · {post.time}</div>
                </div>
                <div>{post.body}</div>
                <div className={`${post.embed ? 'wd-embed-container' : ''} mb-3 mt-2`}>
                    <img className="wd-embed-image" width="100%" height="300px" src={`/images/${post.image}`}/>
                    <div className={`${post.embed ? 'wd-image-body-container' : 'wd-hide'}`}>
                        <div>{post.image_title}</div>
                        <div className="text-secondary">{post.image_body}</div>
                        <i className="fa fa-link text-secondary"><span
                            className="text-secondary wd-link-text"> {post.image_link}</span></i>
                    </div>
                </div>
                <div className="row">
                    <i className="bi bi-chat col-3"><span
                        className="text-secondary ms-3 wd-link-text">{post.comments}</span></i>
                    <i className="bi bi-arrow-repeat col-3"><span
                        className="text-secondary ms-3 wd-link-text">{post.retweets}</span></i>
                    <i className="bi bi-heart col-3"><span
                        className="text-secondary ms-3 wd-link-text">{post.likes}</span></i>
                    <i className="bi bi-upload col-3"><span
                        className="text-secondary ms-3 wd-link-text"></span></i>
                </div>
            </div>
        </div>
    );
}
export default PostItem;