let command = prompt('enter command [ add | list | delete | quit ]: ');
const todoList =['get apples', 'call Mom'];
while (command !== 'quit' && command != 'q') {
    if (command === 'list') {
        console.log ('Here is your todo list:')     // display todo list items
        for (let i=0; i < todoList.length; i++) { 
            console.log(`${i}: ${todoList[i]}`);
        }
        console.log ('### end of list ###:')
    }
    else if (command === 'add') {
        const newItem = prompt('enter item to ADD: ');
        todoList.push(newItem);                     // add item to todoList array
        console.log(`${newItem} added to list`);    // display item addded
    }
    else if (command === 'delete') {
        console.log ('Here is your todo list:')     // display todo list items
        for (let i=0; i < todoList.length; i++) { 
            console.log(`${i}: ${todoList[i]}`);
        }                                           
        console.log ('### end of list ###:')
        const itemToDelete = parseInt(prompt('enter item number you wish to DELETE: '));  // get input from user; return integer
        console.log(`${todoList[itemToDelete]} will be removed from list`); // display item to be deleted
        todoList.splice(itemToDelete,1);                                  // remove item from todoList array
    }
    command = prompt('enter command [ add | list | delete | quit ]: ');
}
