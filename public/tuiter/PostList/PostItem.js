const PostItem = (post) => {
    return(`
    <div class="wd-topic-item wd-flex-container list-group-item wd-post">
        <img class="wd-author-image" height="10px" width="10px" src="/images/${post.author_image}"/>
        <div>
            <div class="wd-flex-text">
                <div class="wd-heading-black">${post.author}&nbsp;</div>
                <i class="fa fa-check-circle"></i>
                <div class="text-secondary">&nbsp;@${post.handle} · ${post.time}</div>
            </div>
            <div>${post.body}</div>
            <div class="${post.embed ? 'wd-embed-container' : ''} mb-3 mt-2">
                <img class="wd-embed-image" width="100%" height="300px" src="/images/${post.image}"/>
                <div class="${post.embed ? 'wd-image-body-container' : 'wd-hide'}">
                    <div>${post.image_title}</div>
                    <div class="text-secondary">${post.image_body}</div>
                    <i class="fa fa-link text-secondary"><span class="text-secondary wd-link-text"> ${post.image_link}</span></i>
                </div>
            </div>
            <div class="row">
                <i class="fa fa-message col-3 wd-icon-color"><span class="text-secondary ms-3 wd-link-text"> ${post.comments}</span></i>
                <i class="fa fa-retweet col-3 wd-icon-color"><span class="text-secondary ms-3 wd-link-text"> ${post.retweets}</span></i>
                <i class="fa fa-heart col-3 wd-icon-color"><span class="text-secondary ms-3 wd-link-text"> ${post.likes}</span></i>
                <i class="fa fa-upload col-3 wd-icon-color"><span class="text-secondary ms-3 wd-link-text"></span></i>
            </div>
        </div>
    </div>
    `);
}
export default PostItem;