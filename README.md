# mvc.pattern

**This is a task-builder application built with javascript and utilizing the Model View Controller pattern.**

**Below are excerpts from an article on AWWWARDS online.**

**The original article can be found here:**
https://www.awwwards.com/build-a-simple-javascript-app-the-mvc-way.html 


#MODEL

Model (Data Layer)- This is where the data is stored for your app. 
The model is decoupled from the views and controllers and has deliberate
ignorance from the wider context. Whenever a model changes, it will notify 
its observers that a change has occurred using an Event Dispatcher. 

You will read about the Event Dispatcher shortly. In your To Do List 
App you will be building, the Model will hold the list of tasks and be 
responsible for any actions taken upon each task object.


