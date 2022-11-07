import React, {useState} from "react";
import "./index.css";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const EditProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    const [firstName, setFirstName] = useState(profile.firstName);
    const firstNameChangeHandler = (event) => {
        setFirstName(event.target.value);
        console.log(firstName);
        console.log(event.target.value);
    }
    const [lastName, setLastName] = useState(profile.lastName);
    const lastNameChangeHandler = (event) => {
        setLastName(event.target.value);
    }

    const saveChanges = () => {

    }

    return(
        <div className="list-group">
            <div className="list-group-item">
                <div className="row">
                    <div className="col-auto ms-3 pt-1">
                        <i className="fa-solid fa-x"></i>
                    </div>
                    <div className="col mb-3">
                        <strong className="wd-heading">Edit Profile</strong>
                        <Link to="/tuiter/profile">
                            <button type="button" className="btn btn-dark rounded-pill float-end">Save</button>
                        </Link>
                    </div>
                </div>
                <div className="position-relative mb-2">
                    <img src="/images/space_bg.jpg" width="100%" height="200px"/>
                    <img src="/images/react_profile.png" width="20%" className="position-absolute wd-position-profile"/>
                </div>
                <div className="wd-info-section mb-4">
                    <label className="mb-1" htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="Enter first name"
                           onChange={firstNameChangeHandler} value={firstName}></input>
                </div>
                <div className="mb-4">
                    <label className="mb-1" htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Enter last name"
                           onChange={lastNameChangeHandler} value={lastName}></input>
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
export default EditProfileComponent;