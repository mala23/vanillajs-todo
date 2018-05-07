console.log('hello')

var todoText = document.getElementById('todo-text')
var todoAdd = document.getElementById('todo-add')

function createTodo() {
  var todoTextValue = todoText.value
  console.log(todoTextValue)
  var list = document.getElementById('todo-list')
  var itemSection = document.createElement('section')
  var itemLi = document.createElement('li')
  var itemCheckbox = document.createElement('input')
  itemCheckbox.setAttribute('type', 'checkbox');
  list.appendChild(itemSection)
  itemSection.appendChild(itemCheckbox)
  itemSection.appendChild(itemLi)
  itemLi.appendChild(document.createTextNode(todoTextValue))
  todoText.value=''
}

todoText.addEventListener('keyup', function(event){
  event.preventDefault()
  if(event.keyCode === 13) {
    createTodo()
  }
})
