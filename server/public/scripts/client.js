console.log('js');

$( document ).ready( readyNow );

function readyNow() {
    console.log('JQ');
    $( '#quoteButton' ).on( 'click', addQuote );
}

function addQuote() {
    let newQuote = {
        quote: $( '#quoteText' ).val(),
        author: $( '#quoteAuthor' ).val()
    };
    $.ajax({
        method: 'POST',
        url: '/quotes',
        data: newQuote
    }).then( function ( response ){
        console.log( 'back from server with ', response );
        getQuote();
    });
    // quotes.push( newQuote ); 
}

function displayQuotes( quotes ) {
    let i = $( '#quoteOutputs');
    i.empty();
    for ( quotation of quotes ) {
        i.append( '<li>' + quotation.quote + ' ~' + quotation.author + '</li>')
    } // end for
} // end displayQuotes

function getQuote() {
    console.log('in getQuote');
    $.ajax({
        method: 'GET',
        url: '/quotes'
    }).then( function ( response ) {
        console.log('back from server with ', response );
        displayQuotes( response );
    });
}
