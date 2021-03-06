const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const recipientschema=new Schema({
    email: String,
    clicked: {type:Boolean,default: false}
}); 

const SurveySchema=new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [recipientschema],
    yes:{
        type: Number,
        default: 0
    },
    no:{
        type:Number,
        default: 0
    },
    _user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    dateSent: Date,
    lastRespnoded:Date
});

mongoose.model("surveys",SurveySchema);