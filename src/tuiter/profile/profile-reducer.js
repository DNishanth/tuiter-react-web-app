import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        firstName: 'Nishanth', lastName: 'Duraiarasu', handle: '@nish',
        profilePicture: 'react_profile.png', 	bannerPicture: 'space_bg.jpg',
        bio: 'Student, Software Engineer, Space, Science Fiction, and Tech enthusiast. Current student at Northeastern University.',
        location: 'Boston, MA',	dateOfBirth: '2023-06-12',	dateJoined: 'November 2022',
        followingCount: 1,	followersCount: 9999
    },
    reducers: {
        updateFirstName(state, action) {
            state.firstName = action.payload;
        },
        updateLastName(state, action) {
            state.lastName = action.payload;
        },
        updateBio(state, action) {
            state.bio = action.payload;
        },
        updateLocation(state, action) {
            state.location = action.payload;
        },
        updateDateOfBirth(state, action) {
            state.dateOfBirth = action.payload;
        },
    }
});

export const {
    updateFirstName,
    updateLastName,
    updateBio,
    updateLocation,
    updateDateOfBirth
} = profileSlice.actions;
export default profileSlice.reducer;