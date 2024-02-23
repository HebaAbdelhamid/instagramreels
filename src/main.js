import { addTodo, editTodo, removeTodo, toggleCheck, listTodos } from './todoappnode';

function main() {
  const [command, firstArg, secondArg, thirdArg] = process.argv.slice(2);

  switch (command) {
    case 'add':
      addTodo(firstArg, secondArg);
      break;
    case 'edit':
      editTodo(firstArg, secondArg, thirdArg);
      break;
    case 'remove':
      removeTodo(firstArg);
      break;
    case 'check':
      toggleCheck(firstArg, true);
      break;
    case 'uncheck':
      toggleCheck(firstArg, false);
      break;
    case 'list':
      listTodos(firstArg);
      break;
    default:
      console.error('Invalid command.');
  }
}

main();
