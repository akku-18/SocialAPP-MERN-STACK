import "./feed.css"

import React, {useState ,useEffect } from 'react';
import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios";
export default function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    const fetchPosts = async () => {
    const res = await axios.get("posts/timeline/63ed08823b323a1f8c74a087")
    console.log(res);
    }
    fetchPosts();
  },[])
  return (
    <div className="feed">
        <div className="feedWrapper">
          <Share/>
          {/* {Posts.map((p)=>(
            <Post key={p.id} post={p}/>
          ))} */}
          
        </div>
    </div>
  )
}
