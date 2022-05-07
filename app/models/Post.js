// module.exports = mongoose => {
//     const Post = mongoose.model(
//       "post",
//       mongoose.Schema(
//         {

//           title:{
//             type:String,
//             required:true,
//             unique:true,
//           },
//           description:{
//             type:String,
//             required:true,
//          },
//           photo:{
//             type:String,
//             required:false,
//           },
//           username:{
//               type:String,
//               required:true,
//           },
//           categories:{
//               type:Array,
//               required:false

//           }                   
//         },
//         { timestamps: true }
//       )
//     );
//     return Post;
//   };

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(  {

  title:{
    type:String,
    required:true,
    unique:true,
  },
  description:{
    type:String,
    required:true,
 },
  photo:{
    type:String,
    required:false,
  },
  username:{
      type:String,
      required:true,
  },
  categories:{
      type:Array,
      required:false

  }                   
},
{timestamps:true});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;

module.exports = Post;