import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

const todos = [];

function displayMenu() {
  console.log('\nTodo List Menu:');
  console.log('1. Add Todo');
  console.log('2. Edit Todo');
  console.log('3. Remove Todo');
  console.log('4. Check Todo');
  console.log('5. Uncheck Todo');
  console.log('6. List All Todos');
  console.log('7. List Completed Todos');
  console.log('8. List Uncompleted Todos');
  console.log('9. Quit');
}

function addTodo() {
  rl.question('Enter todo: ', (todo) => {
    todos.push({ text: todo, completed: false });
    console.log('Todo added successfully.');
    displayMenu();
    processMenuChoice();
  });
}

function editTodo() {
  listTodos();
  rl.question('Enter the index of the todo to edit: ', (index) => {
    if (index >= 0 && index < todos.length) {
      rl.question('Enter the new todo text: ', (newText) => {
        todos[index].text = newText;
        console.log('Todo edited successfully.');
        displayMenu();
        processMenuChoice();
      });
    } else {
      console.log('Invalid index. Please try again.');
      editTodo();
    }
  });
}

function removeTodo() {
  listTodos();
  rl.question('Enter the index of the todo to remove: ', (index) => {
    if (index >= 0 && index < todos.length) {
      todos.splice(index, 1);
      console.log('Todo removed successfully.');
      displayMenu();
      processMenuChoice();
    } else {
      console.log('Invalid index. Please try again.');
      removeTodo();
    }
  });
}

function checkTodo() {
  listTodos();
  rl.question('Enter the index of the todo to check: ', (index) => {
    if (index >= 0 && index < todos.length) {
      todos[index].completed = true;
      console.log('Todo checked successfully.');
      displayMenu();
      processMenuChoice();
    } else {
      console.log('Invalid index. Please try again.');
      checkTodo();
    }
  });
}

function uncheckTodo() {
  listTodos();
  rl.question('Enter the index of the todo to uncheck: ', (index) => {
    if (index >= 0 && index < todos.length) {
      todos[index].completed = false;
      console.log('Todo unchecked successfully.');
      displayMenu();
      processMenuChoice();
    } else {
      console.log('Invalid index. Please try again.');
      uncheckTodo();
    }
  });
}

function listTodos() {
  console.log('\nCurrent Todos:');
  todos.forEach((todo, index) => {
    console.log(`${index}. [${todo.completed ? 'X' : ' '}] ${todo.text}`);
  });
}

function listCompletedTodos() {
  console.log('\nCompleted Todos:');
  todos.forEach((todo, index) => {
    if (todo.completed) {
      console.log(`${index}. [X] ${todo.text}`);
    }
  });
}

function listUncompletedTodos() {
  console.log('\nUncompleted Todos:');
  todos.forEach((todo, index) => {
    if (!todo.completed) {
      console.log(`${index}. [ ] ${todo.text}`);
    }
  });
}

function processMenuChoice() {
  rl.question('Enter your choice (1-9): ', (choice) => {
    switch (choice) {
      case '1':
        addTodo();
        break;
      case '2':
        editTodo();
        break;
      case '3':
        removeTodo();
        break;
      case '4':
        checkTodo();
        break;
      case '5':
        uncheckTodo();
        break;
      case '6':
        listTodos();
        processMenuChoice();
        break;
      case '7':
        listCompletedTodos();
        processMenuChoice();
        break;
      case '8':
        listUncompletedTodos();
        processMenuChoice();
        break;
      case '9':
        rl.close();
        break;
      default:
        console.log('Invalid choice. Please try again.');
        processMenuChoice();
    }
  });
}


