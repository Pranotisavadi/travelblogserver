const express = require("express");
// const express = require("cors");
const app = express();


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

  const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
