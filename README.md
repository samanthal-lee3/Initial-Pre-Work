# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

A hyperlink allows the user to visit a new webpage. When the user clicks a link, the browser gathers information about the page, preparing to complete a GET request that will bring the user to the new page. First, the server translates the link into an IP address that is used to find the specific location of that link on the web. The IP address is used to locate the computer/server where the website lives, and sends out a request to access that page. If the page is unavailable, the user will get an error message. If the page is available (meaning the server is working), then the webpage is sent to your server and loads for you to access in your browser.

Source: https://www.homeandlearn.co.uk/WD/wds5p1.html

## From start to finish, how does data reach you to be rendered in the browser?

Data is stored on servers, and links are used to request access to that data. When a user clicks on a link, they are requesting data. As explained in the last question, the IP address is used to locate the website and server to see if the data is available. If the data is available, it is returned back to your server, and the GET request is completed. When the GET request is completed, the user can view and access the data from the initial server on their own server, interacting with the web application.

## What code is rendered in the browser?

Code written to define the look of the web application in rendered in the browser. This is the front end work of the application that allows the user to see and access the structure, design, and some functionality of the page. Examples of code rendered in the browser is HTML, CSS, and JavaScript. HTML sets the structure of the page, CSS defines the design, and JavaScript allows the user to make changes to the HTML on the page.

## What is the server-side code’s main function?

Server-side code = Back End. This code is the database functionality that allows a user to store, edit, or view data from a database. Examples of code that is written for the server-side include Ruby and Python. These languages build up code that organizes, stores, and retrieves data.

## What is the client-side code’s main function?

Client-side = Front End. This part of the code is what the user sees and can interact with. This code is pulled from the server and is made available on the client's own browser to interact with. For example, client-side code could look like a profile page or a sign-in page. In the code files, these views would be determined with html, css, and js. Actions that the user might take on the page would be functional because of the backend or server-side code written in the files, but the client cannot see that server-side code.

## What is runtime?

Runtime is the code/functions that are called while a program is running. Runtime includes the specific code that a developer writes to make their application work, like the database interactions using back-end languages. In addition, runtime includes the other functionality that the developer did not write, but that allows for their application to be accessed, like the communication between browsers and servers. As languages and code becomes more complex, they require a longer runtime, as there are more files and information to load for the app to function.

Source: https://stackoverflow.com/questions/3900549/what-is-runtime

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

My understanding of this question is, in other words, how many users can interact with your application/store data in your database. Web applications can be created so that (n) number of clients can initialize the client-side code. This could look like (n) amount of users creating a login for your application, or (n) amount of users uploading a photo to the database.

## How many instances of the server-side code are available at any given time?

In collaboration with the thought of the last question, I believe this answer is 1- for any given application, there is one instance of code that interacts with the database, where the (n) amount of client data is stored. While each new client creates a new instance of their data, it is all stored using the same instance of server-side code.

## How many instances of the databases connected to the server application are created?

My understanding of this question is, how many connections can be made between the server and the application. Each time that a user accesses an application, they make a request to the server to access the database. The number of clients who request to access the application and are successfully able to connect is equal to the number of instances that the database is connected to the server.
