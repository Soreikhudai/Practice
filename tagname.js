// var item=document.getElementsByClassName('list-group-item')
// item[2].style.backgroundColor = 'green'
// for(let i=0; i<item.length; i++)
// {
//     item[i].style.fontWeight = 'bold';
//     item[i].style.backgroundColor = 'grey';
// }


var li=document.getElementsByTagName('li');
li[1].style.fontWeight= 'bold';
li[2].textContent= 'Hi this i item 3';

for(let i=0; i<li.length; i++)
{   
   li[i].style.fontWeight='bold'
    li[i].style.backgroundColor= 'grey';
    li[2].style.backgroundColor = 'yellow';
}