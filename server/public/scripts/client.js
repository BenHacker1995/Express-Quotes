console.log('js');

$( document ).ready( readyNow );

function readyNow() {
    $( 'input' ).empty();
    getQuotes();
    $( '#quoteButton' ).on( 'click', addQuote );
}

function quoteDisplay( quotes ) {
    let i = $( '#quoteOutputs');
    i.empty();
    for ( quotation of quotes ){
        i.append( '<li>' + quotation.quote + ' ~' + quotation.author + '</li>');
    }
}

function getQuotes() {
    console.log('in getQuotes');
    $.ajax({
        method: 'GET',
        url: '/quotes'
    }).then( function( response ){
        console.log('from server with', response);
        quoteDisplay( response );
    });
}

function addQuote() {
    let quoteAdd = {
        quote: $( '#quoteText' ).val(),
        author: $( '#quoteAuthor' ).val()
    }
    $.ajax({
        method: 'POST',
        url: '/quotes',
        data: quoteAdd
    }).then( function ( response ){
        console.log( 'back from server with ', response );
    });
    getQuotes();
}

