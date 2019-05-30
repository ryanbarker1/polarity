import mongoose from 'mongoose'

const Schema = mongoose.Schema

let profileSchema = new Schema({
  image: String,
  author: String,
  hobby: String,
})



export let Profile = mongoose.model("Profile", profileSchema)
