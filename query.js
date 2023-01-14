
//querySelector
var nthItem=document.querySelector('.list-group-item:nth-child(2)');
nthItem.style.backgroundColor ='green';

var nthItem=document.querySelector('.list-group-item:nth-child(3)');
nthItem.style.color ='white';

//querySelectorAll

 var item=document.querySelectorAll('.list-group-item');
item[1].style.color= 'green';

var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0; i<odd.length; i++)
{
    odd[i].style.backgroundColor='green';
}
