import Nav from "../nav.js";
import NavigationSidebar
    from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import ProfileComponent from "./profile";
import EditProfileComponent from "./edit-profile";

function Tuiter() {
    return(
        <div>
            <Nav/>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    <Routes>
                        <Route path="/home"    element={<HomeComponent/>}/>
                        <Route path="/explore" element={<ExploreComponent/>}/>
                        <Route path="/profile" element={<ProfileComponent/>}/>
                        <Route path="/edit-profile" element={<EditProfileComponent/>}/>
                    </Routes>
                </div>
                <div className="d-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>

        </div>
    );
}
export default Tuiter