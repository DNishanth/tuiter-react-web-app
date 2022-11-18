import {updateTuitThunk}
    from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = (tuit) => {
    tuit = tuit.tuit;
    const dispatch = useDispatch();
    return(
        <div className="row">
            <i className="bi bi-chat col-3"><span
                className="text-secondary ms-3 wd-link-text">{tuit.replies}</span></i>
            <i className="bi bi-arrow-repeat col-3"><span
                className="text-secondary ms-3 wd-link-text">{tuit.retuits}</span></i>
            <i onClick={() => dispatch(updateTuitThunk({
                ...tuit,
                likes: tuit.likes + 1,
                liked: true
            }))} className={`bi col-3 ${tuit.liked ? 'bi-heart-fill wd-liked-heart' : 'bi-heart'}`}><span
                className="text-secondary ms-3 wd-link-text">{tuit.likes}</span></i>
            <i className="bi bi-share col-3"><span
                className="text-secondary ms-3 wd-link-text"></span></i>
        </div>
    );
};
export default TuitStats;