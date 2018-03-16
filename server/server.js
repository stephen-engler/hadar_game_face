let express = require('express');
let app = express();
let bodyParser = require('body-parser');
const gameCollection = [];//objects with a name and a cost

//configures body parser for jquery
app.use(bodyParser.urlencoded({extended:true}));
const PORT = 4001;

//serve static files

app.use(express.static('server/public'));

//send back all the games
app.get('/game', (req, res)=>{
    res.send(gameCollection);
});

//add a new game
app.post('/game', (req, res)=>{
    console.log(req.body);
    let gameToAdd= req.body;
    let gameName = gameToAdd.name;
    let gameCost = parseFloat(gameToAdd.cost);
    if(gameCost - Math.floor(gameCost)===0){
        gameToAdd.isClearance = true;//you can tac on 
    }
    else {
        gameToAdd.isClearance = false;
    }
    gameCollection.push(gameToAdd);
    console.log(gameCollection);
    res.sendStatus(200);
});



//spin up server
app.listen(PORT, ()=>{
    console.log('server is running on ' + PORT);
});