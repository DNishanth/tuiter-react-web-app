import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "who",
    initialState: {
        firstName: 'Nishanth', lastName: 'Duraiarasu', handle: '@nish',
        profilePicture: 'react_profile.png', 	bannerPicture: 'space_bg.jpg',
        bio: 'Student, Software Engineer, Space, Science Fiction, and Tech enthusiast. Current student at Northeastern University.',
        location: 'Boston, MA',	dateOfBirth: 'Jan 1, 2022',	dateJoined: 'November 2022',
        followingCount: 340,	followersCount: 223
    }
});

export default profileSlice.reducer;