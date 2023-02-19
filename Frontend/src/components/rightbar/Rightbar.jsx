import "./rightbar.css";
import {Users} from "../../dummyData"

import React from "react";
import Online from "../online/Online";

export default function Rightbar({profile}) {
  const HomeRightBar = () =>{
    return(
      <>
      <div className="birthdayContainer">
          <img src="assests/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Ankit</b> and 3 other friends have birthday today
          </span>
        </div>
        <img src="assests/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
        {Users.map(u =>(
          <Online key={u.id} user={u} />
        ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return ( 
      <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Jalandhar</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Gurgaon</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Reationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Mental State:</span>
          <span className="rightbarInfoValue">Happy</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assests/person/1.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Sarthak</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assests/person/2.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Swakshwar</span>
        </div>
        
        <div className="rightbarFollowing">
          <img src="assests/person/3.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Gaurav</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assests/person/4.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Ankit</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assests/person/5.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Krish</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assests/person/1.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Sarthak</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assests/person/6.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Ashu</span>
        </div>
      </div>
      </>
     )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
         {profile ? <ProfileRightBar/> : <HomeRightBar/> }
      </div>
    </div>
  );
}
