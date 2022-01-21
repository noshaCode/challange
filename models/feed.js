const mongoose =require("mongoose");
const Schema = mongoose.Schema;

const feedSchema = new Schema({
    name:{
        type:String,
        required: true,
        minlength: 15
    },

    message:{
        type:String,
        required: true,
        minlength: 40
    },

},{ timestamps: true });


const Feed = mongoose.model("Feed",feedSchema);
module.exports = Feed;