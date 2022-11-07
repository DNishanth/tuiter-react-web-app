const TuitStats = (tuit) => {
    tuit = tuit.tuit;
    return(
        <div className="row">
            <i className="bi bi-chat col-3"><span
                className="text-secondary ms-3 wd-link-text">{tuit.replies}</span></i>
            <i className="bi bi-arrow-repeat col-3"><span
                className="text-secondary ms-3 wd-link-text">{tuit.retuits}</span></i>
            <i className={`bi col-3 ${tuit.liked ? 'bi-heart-fill liked-heart' : 'bi-heart'}`}><span
                className="text-secondary ms-3 wd-link-text">{tuit.likes}</span></i>
            <i className="bi bi-share col-3"><span
                className="text-secondary ms-3 wd-link-text"></span></i>
        </div>
    );
};
export default TuitStats;