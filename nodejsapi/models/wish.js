const mongoose = require("mongoose")
const Schema =  mongoose.Schema  ;

const DataSchema = new mongoose.Schema  ({
     wish:String 
})
 mongoose.model("wis",DataSchema );

// module.exports = wis ;