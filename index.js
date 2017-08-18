function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
var rankList = document.querySelectorAll('ul.ranked-list li')
for (var i = 0; i < rankList.length; i++) {
    rankList[i].innerHTML = parseInt(rankList[i].innerHTML) + n;
}
  return rankList
}

function deepestChild(){
var current = document.querySelector("div#grand-node");
var next = [];

 while (current) {
   if (current.children.length > 0) {
     for (var i = 0; i < current.children.length; i++) {
       next.push(current.children[i]);
    }
       current = next.shift();
    } else {
       return current;
        }
    }
 }
