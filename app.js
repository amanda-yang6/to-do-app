function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    //create a new input
    let checkbox = document.createElement('input');

    //create delete button
    let deleteBtn = document.createElement('button');

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    //set the delete button
    deleteBtn.textContent = "Delete";

    //set the title
    newLi.textContent = title;

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach the delete button to the li
    newLi.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function(event){
      toDoList.removeChild(this.parentElement);
    })

    //style the delete button
    deleteBtn.className= 'mdl-button mdl-js-button mdl-button--raised mdl-button--accent';

    //style the list items
    newLi.className= 'mdl-list__item';

    //attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

  });
}

window.onload = function() {
  onReady();
};
