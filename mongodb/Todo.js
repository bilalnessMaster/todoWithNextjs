import mongoose from 'mongoose'

const Schema = mongoose.Schema

// 
// Fmy7iiYobpM00b3U

const todoschema = new Schema({
        title  : {
            required : true ,
            type : String 
        },
        completed : {
            type : Boolean , 
            default : false
        }
}, {timestamps: true})


const Todo  = mongoose.models.Todo || mongoose.model('Todo', todoschema);


export default Todo;