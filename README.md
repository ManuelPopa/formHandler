# formHandler
simple form linked to Firebase database




Covering note:

 For this application I chose ReactJS, a JS library that I just learned in the past couple of months.
 
 This is an example of how React can be used to link an application with an external database, in this case Firebase, in order to manipulate the data (upload, update, render).

 The main goal was to update and then render on page the data saved and stored in the back-end.

 Before hooking up to Firebase, there has to be installed the ReactFire, which is a library they provide in order to succesfully manipulate the data stored there via ReactJS (for this case will be installed automatically with the rest of the dependencies - please refer to package.json for further info).

 There are a couple of methods, like bindAsObject() or update() and remove() that are part of ReactFire.

 The app.jsx file renders the information on page, inside the "container" div.

 The file head.jsx is used to provide data for the back-end, and this data will be stored as a JSON object, since this is the default for Firebase.

 The file list-people.jsx is where the data is received from the back end and also where the data can be updated.

 The file list.jsx will render the final form of the list received from the server.

 The application uses nested views that help provide a better separation of each component's purpose and code reusability. 

 React JS is the best choice for such applications, especially if you are working with huge data, because when it comes to updates, React will always be the solution that provides the fastest response, since it is working with a virtual DOM and compares it with the actual DOM each time it needs to make a change.


Instructions:

 After you clone or download the .zip file, install dependencies and then start the gulp process with the follwoing cmd lines:

   -> npm install

   -> gulp


Testing the application:

 In order to test this application, a Firebase account is needed. This can be created for free at www.firebase.com 
 
 !! IMPORTANT: inside the application's code the rootUrl variable from app.jsx and list-people.jsx need to be updated to the url from the new firebase account (on the dashboard, will be a window with "new app" name -> click on it and the url of that will be your new rootURL)

 After the change of the rootUrl variable is done, the application should work without issues.


 
