import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="row">
                <div class="position-relative col-11">
                    <input type="search" class="form-control rounded-pill mb-2 ps-5" placeholder="Search Twitter">
                    <i class="fa fa-search position-absolute wd-search-position"></i>
                </div>
                <i class="fa fa-cog fa-2x wd-gear col-1 position-relative mt-1"></i>
            </div>
            <ul class="nav nav-tabs mb-2">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
            <div class="position-relative">
                <img src="/images/spacex.webp" width="100%">
                <h2 class="position-absolute wd-center-image-heading">SpaceX's Starship</h2>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
