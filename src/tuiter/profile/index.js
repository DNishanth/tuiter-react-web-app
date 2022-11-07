import React from "react";
import "./index.css";

const ProfileComponent = () => {
    return(
        <div className="list-group">
            <div className="list-group-item">
                <div className="row">
                    <div className="col-2 pt-2 ps-">
                        <i className="fa-solid fa-arrow-left"></i>
                    </div>
                    <div className="col-10">
                        <div>
                            <strong className="wd-heading">Nishanth Duraiarasu</strong>
                            <div className="text-secondary">9,000 Tweets</div>
                        </div>
                    </div>
                </div>
                <div className="position-relative mb-2">
                    <img src="/images/space_bg.jpg" width="100%" height="200px"/>
                    <img src="/images/react_profile.png" width="75px" className="position-absolute wd-position-profile"/>
                </div>
                <div className="float-end">
                    <button>Edit Profile</button>
                </div>
                <div className="mt-5">
                    <strong className="wd-heading">Nishanth Duraiarasu</strong>
                    <div className="text-secondary">@nish</div>
                </div>
                <br/>
                Student, Software Engineer, Space, Science Fiction, and Tech enthusiast. Current student at Northeastern University.
                <div className="text-secondary mt-2">
                        <i className="bi bi-geo-alt col-4 wd-normal-text me-3"> Boston, MA</i>
                        <i className="bi bi-balloon col-4 wd-normal-text me-3"> Born Jan 1, 2022</i>
                        <i className="bi bi-calendar3 col-4 wd-normal-text"> Joined November 2022</i>
                </div>
                <div className="text-secondary mt-2">
                    <span className="wd-bold">1</span> Following <span className="wd-bold ms-3">1</span> Followers
                </div>


            </div>
        </div>
    );
};
export default ProfileComponent;