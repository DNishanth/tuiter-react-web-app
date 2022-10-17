const PostSummaryItem = (post) => {
    return(`
    <div class="wd-topic-item wd-flex-container list-group-item">
        <div class="wd-center-text">
            <div class="text-secondary">${post.topic}</div>
            <div class="wd-flex-text">
                <div class="wd-heading-black">${post.userName}&nbsp;</div>
                <i class="fa fa-check-circle"></i>
                <div class="text-secondary">&nbsp;- ${post.time}</div>
            </div>
            <div class="wd-heading-black">${post.title}</div>
        </div>
        <img class="wd-topic-image" src="/images/${post.image}"/>
    </div>
    `);
}
export default PostSummaryItem;