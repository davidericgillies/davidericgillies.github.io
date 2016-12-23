/* global $ _ opspark */
$(document).ready(function() {
  $.getJSON('data/product.json', function (data) {
    
    $('h1').css('color', 'red');

   
  })
  .fail(function() { console.log('getJSON on data failed!'); });
  // ALL YOUR CODE GOES ABOVE HERE //
});