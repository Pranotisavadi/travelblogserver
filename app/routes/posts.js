const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");



//Create new post
router.post("/", async (req, res) => {
    const NewPost = new Post(req.body);
    try{
        const savedPost = await NewPost.save();
        res.status(200).json(savedPost);
        // console.log(savedPost);

    } catch (err){
        res.status(500).json(err);
    }

    });

// //Update post
router.put("/:id", async (req, res) =>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try{
                const updatedPost = await Post.findByIdAndUpdate(req.params.id,{
                    $set : req.body,
                },
                {new:true});
                res.status(200).json(updatedPost);               
            }catch(err){
                res.status(500).json(err);
            }  
        } else {
            res.status(401).json("You can Update only your post!");
        }       
    } catch(err){
        res.status(500).json(err);
    }           
   });

// //Delete post
router.delete("/:id", async (req, res) =>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try{
                await post.delete()
               
                res.status(200).json("Post has been deleted...");               
            }catch(err){
                res.status(500).json(err);
            }  
        } else {
            res.status(401).json("You can delete only your post!");
        }       
    } catch(err){
        res.status(500).json(err);
    }           
   });

// //Get Post
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    Post.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found post with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving post with id=" + id });
      });
});


// Get all Posts

router.get("/", async (req, res) => {

    const username = req.query.user;
    const typeName = req.query.type;
    try {
        let posts;
       if (username){
            posts = await Post.find({username})
        } else if(typeName){
            posts = await Post.find({categories:{
                $in:[typeName]
            }})
        } else {
            posts = await Post.find()
        }
        res.status(200).json(posts);
    }catch(err) {
        res.status(500).json(err);
    }

});



module.exports = router;
