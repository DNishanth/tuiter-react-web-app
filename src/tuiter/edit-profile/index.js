import React, {useState} from "react";
import "./index.css";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {
    updateFirstName,
    updateLastName,
    updateBio,
    updateLocation,
    updateDateOfBirth} from "../profile/profile-reducer";

const EditProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState(profile.firstName);
    const firstNameChangeHandler = (event) => {
        setFirstName(event.target.value);
    }

    const [lastName, setLastName] = useState(profile.lastName);
    const lastNameChangeHandler = (event) => {
        setLastName(event.target.value);
    }

    const [bio, setBio] = useState(profile.bio);
    const bioChangeHandler = (event) => {
        setBio(event.target.value);
    }

    const [location, setLocation] = useState(profile.location);
    const locationChangeHandler = (event) => {
        setLocation(event.target.value);
    }

    const [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth);
    const dateOfBirthChangeHandler = (event) => {
        setDateOfBirth(event.target.value);
    }

    const saveChanges = () => {
        dispatch(updateFirstName(firstName));
        dispatch(updateLastName(lastName));
        dispatch(updateBio(bio));
        dispatch(updateLocation(location));
        dispatch(updateDateOfBirth(dateOfBirth));
    }

    return(
        <div className="list-group">
            <div className="list-group-item">
                <div className="row">
                    <div className="col-auto ms-3 pt-1">
                        <Link to="/tuiter/profile">
                            <i className="fa-solid fa-x"></i>
                        </Link>
                    </div>
                    <div className="col mb-3">
                        <strong className="wd-heading">Edit Profile</strong>
                        <Link to="/tuiter/profile">
                            <button type="button" onClick={saveChanges} className="btn btn-dark rounded-pill float-end">Save</button>
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
                <div className="mb-4">
                    <label className="mb-1" htmlFor="bio">Bio</label>
                    <input type="text" className="form-control" id="bio" placeholder="Enter bio"
                           onChange={bioChangeHandler} value={bio}></input>
                </div>
                <div className="mb-4">
                    <label className="mb-1" htmlFor="location">Location</label>
                    <input type="text" className="form-control" id="location" placeholder="Enter location"
                           onChange={locationChangeHandler} value={location}></input>
                </div>
                <div className="mb-4">
                    <label className="mb-1" htmlFor="dob">Date of Birth</label>
                    <input type="date" className="form-control" id="dob" placeholder="Enter date of birth"
                           onChange={dateOfBirthChangeHandler} value={dateOfBirth}></input>
                </div>
                <div className="mb-4">
                    Switch to professional
                    <i className="bi bi-chevron-compact-right float-end"></i>
                </div>
            </div>
        </div>
    );
};
export default EditProfileComponent;