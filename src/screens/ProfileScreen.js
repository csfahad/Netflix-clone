import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <div className="plansScreen__plan">
                  <div className="plansScreen__info1">
                      <h4>Basic</h4>
                      <h5>720p</h5>
                      <button>Subscribe</button>
                  </div>
                  <div className="plansScreen__info2">
                      <h4>Standard</h4>
                      <h5>1080p</h5>
                      <button>Subscribe</button>
                  </div>
                  <div className="plansScreen__info3">
                      <h4>Premium</h4>
                      <h5>4K + HDR</h5>
                      <button>Subscribe</button>
                  </div>
              </div>
            </div>
            <button
              onClick={() => auth.signOut()}
              className="profileScreen__signOut"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
