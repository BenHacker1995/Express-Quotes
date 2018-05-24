// requires
const express = require( 'express' );
const app = express();
let bodyParser = require( 'body-parser' );
// globals
const port = 5000;

let quotes = [];

let quote1 = {
    quote: 'sup nerds',
    author: 'Curtis'
};

let quote2 = {
    quote: `It's true blue, Ma!`,
    author: 'Dev'
};

let quote3 = {
    quote: 'Ribbit',
    author: 'me'
};

quotes.push( quote1, quote2, quote3 );



// // uses
app.use( express.static( 'server/public' ) );

app.use( bodyParser.urlencoded( { extended: true } ) );

// // server up
app.listen( port, () => {
    console.log( 'server up on port: ', port );
}); // end server up

// get route
app.get( '/quotes', ( req, res ) => {
    console.log( 'in GET hit for /quotes route' );
    res.send( quotes );
});

// post route
app.post( '/quotes', (req, res) =>{
    console.log( 'in POST hit for /quotes route: ', req.body );
    quotes.push( req.body );
    res.sendStatus( 200 );
});