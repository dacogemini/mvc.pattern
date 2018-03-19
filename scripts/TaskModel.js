// Model (Data Layer)- This is where the data is stored for your app. 
// =====================================================================================
// TaskModel.js - This class has some basic methods for adding and deleting actual 
// task objects from the tasks array. Setting up three Event objects inside the 
// constructor function allows the model to call the notify() method on each event 
// object after a task has been added, marked as complete, or deleted. This, in turn, 
// passes on the responsibility to the view to re-render the HTML to show the updated 
// list of tasks. 
//! The main thing to recognize is that the Model passes off responsibility
//! to the View. Model -> View.
// =====================================================================================
var TaskModel = function () {
    this.tasks = [];
    this.selectedTasks = [];
    this.addTaskEvent = new Event(this);
    this.removeTaskEvent = new Event(this);
    this.setTasksAsCompletedEvent = new Event(this);
    this.deleteTasksEvent = new Event(this);

};

TaskModel.prototype = {

    addTask: function (task) { //! Event object 1: notifies user a task has been added
        this.tasks.push({
            taskName: task,
            taskStatus: 'uncompleted'
        });
        this.addTaskEvent.notify(); 
    },

    getTasks: function () {
        return this.tasks;
    },

    setSelectedTask: function (taskIndex) {
        this.selectedTasks.push(taskIndex);
    },

    unselectTask: function (taskIndex) {
        this.selectedTasks.splice(taskIndex, 1);
    },

    setTasksAsCompleted: function () { //! Event object 2: notifies user a task has been completed
        var selectedTasks = this.selectedTasks;
        for (var index in selectedTasks) {
            this.tasks[selectedTasks[index]].taskStatus = 'completed';
        }

        this.setTasksAsCompletedEvent.notify();
        this.selectedTasks = [];

    },


    deleteTasks: function () { //! Event object 3: notifies user a task has been deleted
        var selectedTasks = this.selectedTasks.sort();

        for (var i = selectedTasks.length - 1; i >= 0; i--) {
            this.tasks.splice(this.selectedTasks[i], 1);
        }

        // clear the selected tasks
        this.selectedTasks = [];
        this.deleteTasksEvent.notify();
    }
};