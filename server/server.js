let express = require('express');
let app = express();

const PORT = 4001;

//serve static files

app.use(express.static('server/public'));

//spin up server
app.listen(PORT, ()=>{
    console.log('server is running on ' + PORT);
})