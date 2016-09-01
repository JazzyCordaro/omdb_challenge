console.log( 'movie.js sourced' );

var searchResults = [];
$( document ).ready( function(){

  console.log( 'plz work' );




  $( '#searchButton' ).on( 'click', function(){
    console.log( 'in searchButton on click' );
          if($('#titleIn').val() == ''){
          alert('Input can not be left blank');
       }




    var movieName = $( '#titleIn' ).val();
    console.log( 'searching for:', movieName );





    var searchURL = 'http://www.omdbapi.com/?s=' + movieName;
    console.log( 'searchURL:', searchURL );

    $.ajax({
      url: searchURL,
      dataType: 'JSON',
      success: function( data ){
        console.log( 'ajax success data:', data.Search );
        searchResults = data.Search;
        console.log( 'searchResults:', searchResults );
        for( var i = 0 ; i < searchResults.length; i++ ){
          $( '#outputDiv').append( '<p><b>' + searchResults[ i ].Title + '</b> (' + searchResults[ i ].Year + ')</p>' );
          $( '#outputDiv').append( '<img src="' + searchResults[ i ].Poster + '">' );
          document.getElementById("titleIn").value= '';
        }
      }
    });
  });
});
