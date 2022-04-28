# React

Task4_1================================

Add SCSS to the project. Also install redux, react-redux, redux-thunk
Implement 2 Counter Components. 
               2.1 Class component

               2.2 Functional component


Task4_2===============================

Create 2 folders: actions / reducers.

Implement Counter component (component should be functional) with react-redux architecture.


FYI: you need to setup REDUX manually. In this docs you could find how to configure it 
 https://github.com/zalmoxisus/redux-devtools-extension#installation

Task4_3==============================

React App
Implement architecture for REACT/REDUX app
Install react-router-dom. https://reactrouter.com/web/guides/quick-start
 Create few components just with some mock data:
- PostsList / TodoList / UserList / Navigation. Navigation - should be accessible on all pages
- Using react-router-dom implement navigation between this components. 
- Fill the Navigation component with all needed links to navigate between the pages

Task4_4==============================

Implement requests to get data for all Components. 

To make this project interactive we will use https://jsonplaceholder.typicode.com/. We will request all data from there. This API provides us to use REST API with GET/POST/DELETE endpoints.

Posts  - https://jsonplaceholder.typicode.com/posts

Todo - https://jsonplaceholder.typicode.com/todos

Users - https://jsonplaceholder.typicode.com/users - for this list show only "name" and "username"

Task4_5=========================

Make TODO list items clickable. 

You receive the DATA from jsonplaceholder (this is an example)
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
You need to make each item clickable. so i can change the state of complete field. The layout will be whatever you prefer

FYI: (This task for handling the state of the component)

Task4_6==========================

Implement POST request to the https://jsonplaceholder.typicode.com/posts, to update a list of the posts

Create a Form in a new component using one of plugins:

formik - https://formik.org/docs/overview
OR

react hook form - https://react-hook-form.com/

