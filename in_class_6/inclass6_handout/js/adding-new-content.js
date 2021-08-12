$(function() {

//.before()
//.after()
//.prepend() - <li> item </li> - .append()

  $('ul').before('<p>Just Updated</p>');
  $('li.hot').prepend('+ ');
  var $bottomListItem = $('<li><em>gluten free</em> soy sauce</li>');
  $('li#four').after($bottomListItem);



});
