const WhoToFollowListItem = (who) => {
    return(`
    <div class="list-group-item">
        <div class="wd-flex-follow">
            <img class="wd-follow-image rounded-circle me-xl-3" src="/images/${who.avatarIcon}"/>
            <div class="wd-follow-text">
                <div class="wd-heading-black">${who.userName} <i class="fa fa-check-circle"></i></div>
                <div>@${who.handle}</div>
            </div>
            <button class="btn btn-primary rounded-pill wd-flex-follow-btn">Follow</button>
        </div>
    </div>
    `);
}
export default WhoToFollowListItem;