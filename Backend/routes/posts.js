const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

// create user

router.post("/", async (req, res) => {
  const newpost = new Post(req.body);
  try {
    const savePost = await newpost.save();
    res.status(200).json(savePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update user

router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
        await post.updateOne({$set:req.body});
        res.status(200).json("Your post has been updated");
    } else {
      res.status(403).json("You can update only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete user

router.delete("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.userId === req.body.userId) {
          await post.deleteOne();
          res.status(200).json("Your post has been deleted");
      } else {
        res.status(403).json("You can delete only your post");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

// like dislike a post

router.put("/:id/like", async(req, res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)){
            await post.updateOne({$push: {likes:req.body.userId}});
            res.status(200).json("The post has been liked")
        }else{
            await post.updateOne({$pull: {likes: req.body.userId} });
            res.status(200).json("The post has been disliked")
        }
    }catch(err){
        res.status(500).json(err)
    }
    

})
// get a post

router.get("/:id", async(req, res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post)
    }catch(err){
        res.status(500).json(err)
    }
})

// get timeline posts

router.get("/timeline/:userId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    // res.status(200).json(currentUser)
    const userPosts = await Post.find({ userId: currentUser._id });
    res.status(200).json(userPosts)
    const friendPosts = await Promise.all(
      currentUser.following.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.status(200).json(userPosts.concat(...friendPosts))
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
