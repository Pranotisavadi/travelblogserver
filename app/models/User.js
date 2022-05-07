module.exports = mongoose => {
    const Travelblog = mongoose.model(
      "User",
      mongoose.Schema(
        {

          username:{
            type:String,
            required:true,
            unique:true,
          },
          email:{
            type:String,
            required:true,
            unique:true,
          },
          password:{
            type:String,
            required:true,
          },
          profilePic:{
            type:String,
            default:"",
          }
          
        },
        { timestamps: true }
      )
    );
    return Travelblog;
  };