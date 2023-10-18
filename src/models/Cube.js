const { default: mongoose } = require('mongoose');
const mongoose=require('mongoose');

const cubeSchema=new mongoose.Schema({
    name:String,
    description: String,
    imageUrl: String,
    difficultyLevel:Number,
});

const Cube=mongoose.model('Cube', cubeSchema);
