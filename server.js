const express = require("express");
// const express = require("cors");
const app = express();
const authRoute = require("./app/routes/auth");
const usersRoute = require("./app/routes/users");
const postsRoute = require("./app/routes/posts");
const typesRoute = require("./app/routes/types");
const multer = require ("multer")


// app.listen("5000", ()=> {
//     console.log("Backend is running")
// })
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my TravelBlog!" });
  });

  app.use(express.json());

  app.use(express.urlencoded({ extended: true }));
  const db = require("./app/models");
    
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./app/images")
    },
    filename: function (req, file, cb) {     
      cb(null, req.body.name)
    }
  })
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded")
  });

 
  app.use("/api/auth", authRoute);
  app.use("/api/users", usersRoute);
  app.use("/api/posts", postsRoute);
  app.use("/api/types", typesRoute);

  const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
