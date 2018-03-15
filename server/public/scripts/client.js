console.log('in js');

$(document).ready(readyNow); 

function readyNow(){
    console.log('document ready');
    $('#submitButton').on('click', submitGame);
    //get the games when page loads
    getAllGames();
}
//app.get('/game') and app.post('/game') can be the same because different type of requests
//url at top of browser can only make a get request.
function submitGame(){
    let gameName = $('#gameName').val();
    let cost = $('#cost').val();
    let gameToSend = {name: gameName, cost: cost};
    $.ajax({
        type: 'POST',
        data: gameToSend,
        url: '/game'
    }).done(function(response){//need to wait till post request sends back response before doing get 
        //response from a post will just be 200 sucess
        console.log(response);
        //refresh games list
        getAllGames();
    }).fail(function(response){
        alert('something went wrong');
    });
}

function getAllGames(){
    $.ajax({
        type: 'GET',
        url: '/game'
    }).done(function(response){
        appendToDom(response);//the response is our gameCollection array
    });
}

function appendToDom(gameCollection){
    $('#gameContent').empty();
    for(let game of gameCollection){
        console.log('game ', game);
        let tr =$('<tr></tr>');
        tr.append('<td>' + game.name + '</td>');
        tr.append('<td> '+ game.cost+'</td>');
        $('#gameContent').append(tr);
    }
}