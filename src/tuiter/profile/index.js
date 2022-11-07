import React from "react";
import "./index.css";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    console.log(profile);
    return(
        <div className="list-group">
            <div className="list-group-item">
                <div className="row">
                    <div className="col-auto pt-2 ms-3">
                        <i className="fa-solid fa-arrow-left"></i>
                    </div>
                    <div className="col">
                        <div className="wd-min-space mb-1">
                            <strong className="wd-heading">{profile.firstName} {profile.lastName}</strong>
                            <div className="text-secondary">9,000 Tweets</div>
                        </div>
                    </div>
                </div>
                <div className="position-relative mb-2">
                    <img src="/images/space_bg.jpg" width="100%" height="200px"/>
                    <img src="/images/react_profile.png" width="20%" className="position-absolute wd-position-profile"/>
                </div>
                <div className="float-end">
                    <Link to="/tuiter/edit-profile">
                        <button className="btn btn-light rounded-pill">Edit Profile</button>
                    </Link>
                </div>
                <div className="wd-info-section wd-min-space mb-3">
                    <strong className="wd-heading">{profile.firstName} {profile.lastName}</strong>
                    <div className="text-secondary">{profile.handle}</div>
                </div>
                {profile.bio}
                <div className="text-secondary mt-2">
                        <i className="bi bi-geo-alt col-4 wd-normal-text me-3"> {profile.location}</i>
                        <i className="bi bi-balloon col-4 wd-normal-text me-3"> Born {profile.dateOfBirth}</i>
                        <i className="bi bi-calendar3 col-4 wd-normal-text"> Joined {profile.dateJoined}</i>
                </div>
                <div className="text-secondary mt-2">
                    <span className="wd-bold">1</span> Following <span className="wd-bold ms-3">1</span> Followers
                </div>


            </div>
        </div>
    );
};
export default ProfileComponent;