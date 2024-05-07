//bring express module into sever file
const express =  require('express') ;

//create an instance of express, by callling the function
const app = express() ;
const port = 5000 ;

//server is attached to a host, at 5000.
//tell sever where files for page are
app.use(express.static('server/public')) ;

//starts server to run
app.listen(
    port,
    () => {console.log('lsitening on port...', port)
} );

// killall -9 node
