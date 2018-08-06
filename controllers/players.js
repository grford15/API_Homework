const express = require('express')
const playerRouter = new express.Router()

players = ["Ryan Jack", "Conor Goldson", "Alfredo Morelos", "Daniel Candieas"]

playerRouter.get('/', function(req, res){
  res.json(players)
})

playerRouter.get('/:id', function(req, res){
  let index = req.params.id
  res.json(players[index])
});

playerRouter.post('/', function(req, res){
  players.push(req.body.player)
  res.json(players)
})

playerRouter.put('/:id', function(req, res){
  let index = req.params.id
  players[index] = req.body.player
  res.json(players)
})

playerRouter.delete('/:id', function(req, res){
  let index = req.params.id
  players.splice(index, 1)
  res.json(players)
})

module.exports = playerRouter
