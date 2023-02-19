import "./sidebar.css"
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import {MdRssFeed, MdGroups, MdEventNote, MdSchool} from "react-icons/md";
import {FaPlayCircle} from "react-icons/fa";
import {BsBookmarksFill, BsQuestionSquareFill, BsBag} from "react-icons/bs";



export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MdRssFeed className="sidebarIcon" />
              <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
              <FaPlayCircle className="sidebarIcon" />
              <span className="sidebarListItemText">Videos</span>
            </li>

            <li className="sidebarListItem">
              <MdGroups className="sidebarIcon"/>
              <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
              <BsBookmarksFill className="sidebarIcon"/>
              <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
              <BsQuestionSquareFill className="sidebarIcon"/>
              <span className="sidebarListItemText">Questtions</span>
            </li>
            <li className="sidebarListItem">
              <BsBag className="sidebarIcon"/>
              <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarListItem">
              <MdEventNote className="sidebarIcon"/>
              <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
              <MdSchool className="sidebarIcon"/>
              <span className="sidebarListItemText">Courses</span>
            </li>
          </ul>
          <button className="sidebarButton">Show More</button>
          <hr className="sidebarHr"/>
          <ul className="sidebarFriendList">
            {Users.map(u=>(
              <CloseFriend key={u.id} user={u} />
            ))}
          </ul>
        </div>
    </div>
  )
}
