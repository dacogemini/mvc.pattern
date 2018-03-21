// Whenever a model changes, it will notify its observers 
// that a change has occurred using an Event Dispatcher. 
// In your To Do List App you will be building, 
// the Model will hold the list of tasks and be responsible
// for any actions taken upon each task object.

var TaskModel = function () {
    this.tasks = [];
    this.selectedTasks = [];
    this.addTaskEvent = new Event(this); // new keyword is a contructor invocation and it creates a new object
    this.removeTaskEvent = new Event(this); // new keyword is a contructor invocation and it creates a new object
    this.setTasksAsCompletedEvent = new Event(this); // new keyword is a contructor invocation and it creates a new object
    this.deleteTasksEvent = new Event(this); // new keyword is a contructor invocation and it creates a new object
};
TaskModel.prototype = { 
    addTask: function (task) { //! Add a task from input box ex. clean
        this.tasks.push({ // this = the object that owns the function
            taskName: task,
            taskStatus: 'uncompleted'
        });
        this.addTaskEvent.notify(); // Newly created object
    },
    getTasks: function () {
        return this.tasks; // 
    },
    setSelectedTask: function (taskIndex) {
        this.selectedTasks.push(taskIndex);
    },
    unselectTask: function (taskIndex) {
        this.selectedTasks.splice(taskIndex, 1);
    },
    setTasksAsCompleted: function () {
        var selectedTasks = this.selectedTasks;
            for (var index in selectedTasks) {
                this.tasks[selectedTasks[index]].taskStatus = 'completed';
        }
        this.setTasksAsCompletedEvent.notify();
        this.selectedTasks = [];
    },
    deleteTasks: function () {
        var selectedTasks = this.selectedTasks.sort();
            for (var i = selectedTasks.length - 1; i >= 0; i--) {
                this.tasks.splice(this.selectedTasks[i], 1);
        }

        // clear the selected tasks
        this.selectedTasks = [];
        this.deleteTasksEvent.notify();

    }


};