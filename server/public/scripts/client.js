console.log('in js');

$(document).ready(readyNow); 

function readyNow(){
    console.log('document ready');
    $('#submitButton').on('click', submitGame);
}

function submitGame(){
    let gameName = $('#gameName').val();
    let cost = $('#cost').val();
    let gameToSend = {name: gameName, cost: cost};
    $.ajax({
        type: 'POST',
        data: gameToSend,
        url: '/game'
    }).done(function(response){
        //response from a post will just be 200 sucess
        console.log(response);
    }).fail(function(response){
        alert('something went wrong');
    });
}