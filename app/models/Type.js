// module.exports = mongoose => {
//     const Type = mongoose.model(
//       "type",
//       mongoose.Schema(
//         {

//           name:{
//               type:String,
//               required:true,
//           },
               
//         },
//         { timestamps: true }
//       )
//     );
//     return Type;
//   };


//   const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const typeSchema = new Schema(  {

  name:{
      type:String,
      required:true,
  },
       
},
{timestamps:true});

const Type = mongoose.model('Type', typeSchema);

module.exports = Type;