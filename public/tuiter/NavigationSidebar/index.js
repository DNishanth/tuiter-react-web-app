const NavigationSidebar = () => {
    return(`
    <div class="list-group mb-2">
        <a class="list-group-item" href="#"><i class="fa fa-kiwi-bird"></i></a>
        <a class="list-group-item" href="#">
            <div class="wd-flex-text">
                <i class="fa fa-home"></i>
                <div class="ms-1 d-none d-xl-block">Home</div>
            </div>
        </a>
        <a class="list-group-item active" href="#">
            <div class="wd-flex-text">
                <i class="fa fa-hashtag"></i>
                <div class="ms-1 d-none d-xl-block">Explore</div>
            </div>
        </a>
        <a class="list-group-item" href="#">
            <div class="wd-flex-text">
                <i class="fa fa-bell"></i>
                <div class="ms-1 d-none d-xl-block">Notifications</div>
            </div>
        </a>
        <a class="list-group-item" href="#">
            <div class="wd-flex-text">
                <i class="fa fa-envelope"></i>
                <div class="ms-1 d-none d-xl-block">Messages</div>
            </div>
        </a>
        <a class="list-group-item" href="#">
            <div class="wd-flex-text">
                <i class="fa fa-bookmark"></i>
                <div class="ms-1 d-none d-xl-block">Bookmarks</div>
            </div>
        </a>
        <a class="list-group-item" href="#">
            <div class="wd-flex-text">
                <i class="fa fa-list"></i>
                <div class="ms-1 d-none d-xl-block">Lists</div>
            </div>
        </a>
        <a class="list-group-item" href="#">
            <div class="wd-flex-text">
                <i class="fa fa-user"></i>
                <div class="ms-1 d-none d-xl-block">Profile</div>
            </div>
        </a>
        <a class="list-group-item" href="#">
            <div class="wd-flex-text">
                <i class="fa fa-ellipsis-h"></i>
                <div class="ms-1 d-none d-xl-block">More</div>
            </div>
        </a>
    </div>
    <button class="btn btn-primary w-100 rounded-pill p-2">Tweet</button>
 `);
}
export default NavigationSidebar;