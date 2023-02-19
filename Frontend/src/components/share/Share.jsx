import "./share.css"
import {MdPermMedia,MdLabelImportant, MdEmojiEmotions, MdLocationPin} from "react-icons/md";

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assests/person/1.jpeg" alt="" className="shareProfileImg"/>
                <input placeholder="What's in your mind" 
                className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareButton">
                <div className="shareOptions">
                    <div className="shareOption">
                        <MdPermMedia htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptionText">Photo or video</span>
                    </div>
                    <div className="shareOption">
                        <MdLabelImportant htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <MdLocationPin htmlColor="violet" className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <MdEmojiEmotions htmlColor="orange" className="shareIcon"/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                    <button className="shareButtons">Share</button>
                </div>
            </div>
        </div>
    </div>
  )
}
