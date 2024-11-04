import { log } from 'console'
import mongoose from 'mongoose'


const db = async() =>{
    try  { 
        const conn = await mongoose.connect('mongodb+srv://phobiahomo0:Fmy7iiYobpM00b3U@todos.dy8ph.mongodb.net/?retryWrites=true&w=majority&appName=todos')
        console.log('successfuly connected');
        
    }catch(error){
        console.log(error);
        
    }
} 



export default db;