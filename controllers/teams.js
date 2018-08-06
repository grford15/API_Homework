const express = require('express');
const teamRouter = new express.Router();

let teams = ['Rangers', 'Aberdeen', 'Celtic', 'Hearts', 'Hibs']

teamRouter.get('/', function(req, res){
  res.json(teams)
});

teamRouter.get('/:id', function(req, res){
  let index = req.params.id
  res.json(teams[index])
});

teamRouter.post('/', function(req, res){
  teams.push(req.body.team)
  res.json(teams)
})

teamRouter.put('/:id', function(req, res){
  let index = req.params.id
  teams[index] = req.body.team
  res.json(teams)
})

teamRouter.delete('/:id', function(req, res){
  let index = req.params.id
  teams.splice(index, 1)
  res.json(teams)
})

module.exports = teamRouter;
