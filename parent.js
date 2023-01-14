// var item=document.querySelector('#items');
// //parentNode:
// console.log(item.parentNode);
// item.parentNode.style.backgroundColor = 'lightGreen';



//parentElement:
var item=document.querySelector('#items');
console.log(item.parentElement);
item.parentElement.style.backgroundColor = 'grey';

//childNode
// console.log(item.childNote)
//use childeElement
console.log(item.children);
console.log(item.children[2]);
item.children[2].style.backgroundColor= 'yellow';


//firstChild
// console.log(item.firstChild);
//firstElementChild: use this one
console.log(item.firstElementChild);
item.firstElementChild.textContent= 'welcome';

//lastChild:
// console.log(lastChild);
//lastElementChild:use this one
console.log(item.lastElementChild);
item.lastElementChild.textContent= 'this is ok';


//nextsibling:
//console.log(item.nextSibling);
//nextElementSibling:
console.log(item.nextElementSibling);
//its null because there is no more siblings;


//previousSibling:
//console.log(item.previousSibling)
//previousElementSibling:
console.log(item.previousElementSibling);
item.previousElementSibling.style.color= 'darkblue';


//creating Element
//creating div
var newDiv=document.createElement('div');
//adding class
newDiv.className='hello';
//adding id
newDiv.id='hello1';
//adding attribute
newDiv.setAttribute('hello', 'hello div');


//creating divText
var newDivText= document.createTextNode('Hello');
newDiv.appendChild(newDivText)//adding text to div

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);

container.insertBefore(newDiv, h1)

