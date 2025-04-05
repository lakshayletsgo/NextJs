### File Based Routing
File-based routing is a technique used in web development to handle HTTP requests based on the file structure of the application. This approach is often used in static site generators and serverless applications.

In file-based routing, each route is associated with a specific file or directory in the project.

As told earlier to do the file based routing while creating the app we have to disable the app routing and then we can use the file based routing as default.

To make a web page we just have to create the file and the file name should be the same as the route name.
so for eg if i want to create a route for /about, I have to just declare a file in a pages folder names about.js


#### Nested Routing

Nested routing means that we can have routes inside other routes. This is useful when we have a complex application with multiple levels of navigation.

To do this we can just create a folder with the name of the parent route
For eg If i want to get nested route like men/underwear
I can just create a folder inside the pages named men and inside men i can just create a class named underwear



#### Dynamic Routing
Dynamic routing is the routing in which it automatically it creates route names
For eg if i want to create a route for /users/lakshay or /users/rahul

But i don't want that i have to manually create the route for each user
for that i will create a folder named users and in that i create a file named [user] and in that file i will write the code for that user
For eg if i want to print their name i use this