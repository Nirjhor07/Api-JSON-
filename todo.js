//create the function for todo btn clicked
const loadTodo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayTodo(data));
};

const displayTodo = (todos) => {
  //   console.log(todos);

  //get the parent div
  const todoParent = document.getElementById("todo-div");
  //   console.log(todoParent);
  // set the todoParent empty
  todoParent.innerHTML = "";

  //loop chalamu protita todo er jnnw
  todos.forEach((element) => {
    // console.log(element)
    //create div for each todo
    const todoDiv = document.createElement("div");

    // set the todo inner items
    todoDiv.innerHTML = `
    <div class="border gap-3 bg-amber-100/10 p-4 shadow rounded-2xl h-full flex  items-center">
       <p> ${element.completed === true ? `<i class="fa-solid fa-check-double"></i>` : `<i class="fa-regular fa-circle-xmark"></i>`}</p>
       <h1 class="text-2xl text-neutral font-extrabold">${element.title}</h1>
    </div>
    
    `;

    // append the items title to the parent div
    todoParent.appendChild(todoDiv);
  });
};
