const mongoose = require("mongoose")
const validator = require("validator")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")

const userSchema = mongoose.Schema({
    fName:{
        type:String, 
        trim:true,
        lowercase:true,
        minLength: 5,
        maxLength:20,
        required:true
    }, 
    lName:{
        type:String, 
        trim:true,
        lowercase:true,
        minLength: 5,
        maxLength:20,
        required:true
    }, 
    age:{
        type:Number,
        min:21,
        max:60,
        default:21
    }, 
    email:{
        type:String, 
        trim:true,
        lowercase:true,
        required:true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email format")
            }
        }
    }, 
    roleId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Role"
     },
     Qualification:{
        type:String, 
        trim:true,
        lowercase:true,
        enum: ["beginner", "advanced","professional"]
    },
    status:{
        type:Boolean,
        default: false
    }, 
    password:{
        type:String, 
        trim:true,
        minLength: 5,
        required:true,
    }, 

    gender:{
        type:String, 
        trim:true,
        lowercase:true,
        enum: ["male", "female"]
    }, 
    phoneNum:{
        type: String,
        validate(value){
            if(!validator.isMobilePhone(value, "ar-EG"))
                throw new Error ("invalid number")
        }
    },
    tokens:[{
        token:{ type:String, required: true}
}],
    resetPasswordToken: {
        type: String,
        required: false
    },

    resetPasswordExpires: {
        type: Date,
        required: false
    }
}, {
    timestamps:true
})
userSchema.virtual("myPosts", {
    ref:"Post",
    localField:"_id",
    foreignField:"userId"
})

userSchema.pre('save',  function(next) {
    const user = this;

    if (!user.isModified('password')) return next();

    bcryptjs.genSalt(10, function(err, salt) {
        if (err) return next(err);

        bcryptjs.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(password) {
    return bcryptjs.compareSync(password, this.password);
};

userSchema.statics.loginUser = async(email, password) => {
    const userData = await User.findOne({email})
    if(!userData) throw new Error("invalid email")
    const validatePassword = await bcryptjs.compare(password, userData.password)
    if(!validatePassword) throw new Error("invalid password")
    return userData
}
userSchema.methods.toJSON = function(){
    const data = this.toObject()
    delete data.__v
    delete data.password
    // delete data.tokens
    return data
}
userSchema.methods.generateToken = async function(){
    const userData = this
    const token = jwt.sign({_id: userData._id}, process.env.tokenPass)
    userData.tokens = userData.tokens.concat({token})
    // userData.tokens.push({token})
    await userData.save()
    return token
}
const User = mongoose.model("User", userSchema)
module.exports=User
