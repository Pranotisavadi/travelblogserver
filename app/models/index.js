const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.travelblog = require("./User.js")(mongoose);
db.travelblog = require("./Post.js")(mongoose);
db.travelblog = require("./Type.js")(mongoose);
module.exports = db;


