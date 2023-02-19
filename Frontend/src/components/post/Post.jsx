import "./post.css";
import { Users } from "../../dummyData";
import { useState } from "react";
import {FiMoreVertical} from "react-icons/fi";

export default function Post({post}) {
  const [like, setlike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(post.like)
  const LikeHandler =()=>{
    setlike(isLiked ? like+1 : like-1)
    setIsLiked(!isLiked)
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src = {Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <FiMoreVertical />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            {post?.desc}
          </span>
          <img src={post.photo} alt="" className="postImg"/>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assests/like.png" onClick={LikeHandler} alt="" />
            <img className="likeIcon" src="/assests/heart.png" onClick={LikeHandler} alt="" />
            <span className="postLikeCounter">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
