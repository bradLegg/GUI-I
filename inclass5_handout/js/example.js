function appendUnorderedList(text, appendStart_OR_appendEnd) {
  /*
  getElementsByTagName() returns an array of objects, thus index
  is specified
  */
  var ul = document.getElementsByTagName('ul')[0];
  var li = document.createElement('li');

  if (appendStart_OR_appendEnd == "end") {
  ul.appendChild(li);
  li.textContent = text;
  } else if (appendStart_OR_appendEnd == "start") {
    ul.prepend(li);
    li.textContent = text;
  } else {
    alert("ERR: invalid parameter passed to appendUnorderedList");
  }
}

// ADD NEW ITEM TO END OF LIST
appendUnorderedList("cream", "end");

// ADD NEW ITEM START OF LIST
appendUnorderedList("kale", "start");

// ADD A CLASS OF COOL TO ALL LIST ITEMS
let listLength = (document.querySelectorAll("ul li")).length;

//using < because starts from 0
for (i = 0; i < listLength; i++) {
  var li = document.getElementsByTagName('li')[i];
  li.classList.add("cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
document.getElementsByTagName("h2")[0].innerHTML += ' ' + '('+listLength+')';
