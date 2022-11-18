import {updateTuitThunk}
    from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = (tuit) => {
    tuit = tuit.tuit;
    const dispatch = useDispatch();
    return(
        <div className="row">
            <i className="bi bi-chat col"><span
                className="text-secondary ms-3 wd-link-text">{tuit.replies}</span></i>
            <i className="bi bi-arrow-repeat col"><span
                className="text-secondary ms-3 wd-link-text">{tuit.retuits}</span></i>
            <i onClick={() => dispatch(updateTuitThunk({
                ...tuit,
                likes: tuit.likes + 1,
                liked: true
            }))} className={`col ${tuit.liked ? 'bi-heart-fill wd-liked-heart' : 'bi-heart'}`}><span
                className="text-secondary ms-3 wd-link-text">{tuit.likes}</span></i>
            <i onClick={() => dispatch(updateTuitThunk({
                ...tuit,
                dislikes: tuit.dislikes + 1,
                disliked: true
            }))} className={`bi col ${tuit.disliked ? 'bi-hand-thumbs-down-fill' : 'bi-hand-thumbs-down'}`}><span
                className="text-secondary ms-3 wd-link-text">{tuit.dislikes}</span></i>
            <i className="bi bi-share col-auto"><span
                className="text-secondary ms-3 wd-link-text"></span></i>
        </div>
    );
};
export default TuitStats;