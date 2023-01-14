
var header=document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px black';

var headTitle=document.querySelector('#header-title');
headTitle.textContent = "Practice by Soreipam Khudai";

var titles=document.querySelector('.title');
titles.style = 'fw-bold';
titles.style.color = 'green';

var odd=document.querySelectorAll('li:nth-child(odd)');
for(let i=0; i<odd.length; i++)
{
    odd[i].style.backgroundColor = 'yellow';
    odd[i].style.color = 'blue';
}










