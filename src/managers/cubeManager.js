const Cube=require('../models/Cube');
const uniqid=require('uniqid');
const cubes=[];
//const db = require('../db.json');

exports.getAll= async ( search, from, to)=> {
    let result=await Cube.find().lean();

//TODo: use mongoose to filter in the db
    if(search){
        result=result.filter(cube=> cube.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(from){
     result=result.filter(cube=>cube.difficultyLevel >=Number(from));
    }
    if(to){
        result=result.filter(cube=>cube.difficultyLevel <=Number(to));
    }
    return result;
};

exports.getOne=(cubeId)=> Cube.findById(cubeId);

exports.create = async (cubeData)=>{
//    const newCube={
//     id: uniqid(),
//     ...cubeData,
//    };
const cube=new Cube(cubeData);
await cube.save();

 return cube.save();
};