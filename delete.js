var form=document.getElementById("addForm");
var itemList= document.getElementById('items');
//form submit event:
form.addEventListener("submit", addItem);
//delete event
itemList.addEventListener('click', removeItem)

//add item
function addItem(e){
    e.preventDefault();

//when submit we need to get input value so
var newItem=document.getElementById('item').value;

//crete new li element
var li = document.createElement('li')

//add class
li.className="list-group-item";

//add text note with input value
li.appendChild(document.createTextNode(newItem))

//create delete button element
var deleteBtn=document.createElement('button')
deleteBtn.className="btn btn-danger btn-sm float-right delete";
//append textnode
deleteBtn.appendChild(document.createTextNode('x'));
//append button to li
li.appendChild(deleteBtn)

//append li to list
itemList.appendChild(li);

}


function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure ?')){
            var li=e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}