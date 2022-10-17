import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
    <div class="list-group">
        <div class="list-group-item wd-heading-black">Who to follow</div>
        ${who.map(whoItem => (`${WhoToFollowListItem(whoItem)}`)).join('')}
    </div>
`);
}
export default WhoToFollowList;