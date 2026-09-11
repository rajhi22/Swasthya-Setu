import { Schema,model } from 'mongoose'; export const Counter=model('Counter',new Schema({_id:String,sequence:{type:Number,default:0}}));
