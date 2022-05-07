module.exports = mongoose => {
    const Type = mongoose.model(
      "type",
      mongoose.Schema(
        {

          name:{
              type:String,
              required:true,
          },
               
        },
        { timestamps: true }
      )
    );
    return Type;
  };