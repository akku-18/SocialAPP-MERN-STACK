import './topbar.css'
import { GoSearch, GoPerson } from 'react-icons/go';
import {BsChatRightDotsFill} from 'react-icons/bs'
import {IoNotifications} from "react-icons/io5"
import { Link } from "react-router-dom";



export default function Topbar(){
    return(
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <Link to="/" className='logo'>Socialgram</Link>
            </div>
            <div className="topbarCenter">
                <div className="searchBar ">    
                    <GoSearch className='searchIcon'/>
                    <input placeholder='Search for friends, post or video' className="searchInput" />
                </div>
            </div>  
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">HomePage</span>
                    <span className="topbarLink">TimeLine</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <GoPerson  className='topbar-icons'/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <IoNotifications className='topbar-icons'/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <BsChatRightDotsFill className='topbar-icons'/>
                        <span className="topbarIconBadge">3</span>
                    </div>
                </div>
                <div className="auth">
                <Link to="/login" className='log'>Login</Link>
                <Link to="/register"className='reg'>Register</Link>
                </div>
                <Link to="/profile"><img src="/assests/person/1.jpeg" alt="" className="topbarImg" /></Link>
            </div>
        </div>
    )
}
