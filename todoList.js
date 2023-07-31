/*
Loïs GALLAUD
Todo list application 
*/

// Todo list object
const todoList = {
    // Todo list's tasks
    tasks: [],
    // Todo list's add task
    addTask(task, taskName) {
        this.tasks.push({
            task: task,
            taskName: taskName,
            completed: false
        });
    },    
    // Todo list's change task
    changeTask(position, task, taskName) {
        this.tasks[position] = {
            task: task,
            taskName: taskName,
            completed: false
        };
    },
    // Todo list's delete task
    deleteTask(position) {
        this.tasks.splice(position, 1);
    },  
    // Todo list's display tasks
    displayTasks() {
        console.log('My tasks:');
        for (let i = 0; i < this.tasks.length; i++) {
            console.log(`${this.tasks[i].completed? 'o': 'x'}: ${this.tasks[i].taskName}`);
        }
        console.log('-----------------')
    },
    // Todo list's toggle completed
    toggleCompleted(position) {
        let task = this.tasks[position];
        task.completed = !task.completed;
        this.displayTasks();
    },
    // Todo list's toggle all
    toggleAll() {
        let totalTasks = this.tasks.length;
        let completedTasks = 0;
        // Get number of completed tasks
        for (let i = 0; i < totalTasks; i++) {
            if (this.tasks[i].completed === true) {
                completedTasks++;
            }
        }   
        // Case 1: If everything's true, make everything false
        if (completedTasks === totalTasks) {
            for (let i = 0; i < totalTasks; i++) {
                this.tasks[i].completed = false;
            }
        // Case 2: Otherwise, make everything true
        } else {
            for (let i = 0; i < totalTasks; i++) {
                this.tasks[i].completed = true;
            }
        }
        this.displayTasks();
    }   
}

// Todo list's tasks
todoList.addTask('item 1', 'Task 1');
todoList.addTask('item 2', 'Task 2');
todoList.addTask('item 3', 'Task 3');
todoList.displayTasks();

// Todo list's add task
todoList.addTask('item 4', 'Task 4');
todoList.displayTasks();

// Todo list's change task
todoList.changeTask(0, 'item 1 updated', 'Task 1 updated');
todoList.displayTasks();

// Todo list's delete task
todoList.deleteTask(0);
todoList.displayTasks();

// Todo list's toggle completed
todoList.toggleCompleted(0);

// Todo list's toggle all
todoList.toggleAll();

// Todo list's toggle all inverted
todoList.toggleAll();
