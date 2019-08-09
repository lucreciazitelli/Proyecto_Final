const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username:{	
				type: String, 
				required: true, 
				lowercase: true, 
				unique: true
			 },
	password:{ 
				type:String,
				required:true,
			 },
    name:{
				type:String,
				required:true,
				unique:true
	},
  },
  {timestamps: true},
);

mongoose.model('user', userSchema);
