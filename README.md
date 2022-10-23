# input-component-react
input-component-react simplifies the process of creating input JSX components for react-based applications. The componets generated are CSS-friendly and are compatible with unit-testing using React Testing Library and JEST


## Available Props 


| Props        	| Definition                                                                                             	| Input Type 	|
|--------------	|--------------------------------------------------------------------------------------------------------	|------------	|
| value        	| Value of input component. Used to track stage changes, and error handling                              	| String     	|
| label        	| Label of input component                                                                               	| String     	|
| name         	| Name of input component. Used to track stage changes, and error handling                               	| String     	|
| placeholder  	| Placeholder of input component                                                                         	| String     	|
| type         	| Type of input component required (example: button, checkbox, color, date, password, file, submit, etc) 	| String     	|
| onChange     	| The script to run on the change of input value                                                         	| Function   	|
| onBlur       	| The script to run when the input value loses focus                                                     	| Function   	|
| onClick      	| The script to run when the input component is clicked                                                  	| Function   	|
| isError      	| If set to true, will display the error message                                                         	| Boolean    	|
| errorMessage 	| The error message to be displayed below the input component                                            	| String     	|
| dataTestId   	| Used as a data-testId for unit testing purpose                                                         	| String     	|

## CSS Classes

| className                                     	| Type    	| Feature                                                                                       	|
|-----------------------------------------------	|---------	|-----------------------------------------------------------------------------------------------	|
| input-component-react                         	| Primary 	| CSS class for an entire input component, consisting of label, input, and error div            	|
| input-component-react-label                   	| Primary 	| CSS class for labels of the component                                                         	|
| labelAndInputContainer                        	| Primary 	| CSS class for input and error div. Flex properties can be applied here to create distinct UIs 	|
| {`input-component-react-label ${label}label   	| Custom  	| Custom CSS class for a particular label                                                       	|
| {input-component-react-input ${label}input}   	| Custom  	| Custom CSS class for a particular input                                                       	|
| {`input-component-react-error ${label}error`} 	| Custom  	| Custom CSS class for a particular error div                                                   	|

![image](https://user-images.githubusercontent.com/32457437/197393567-332eba27-821e-4171-8653-22982c931c8d.png)

For Example, In the above screenshot, you can see 2 text inputs, and 1 color, number, file, date type inputs each
The code required to render this form is: 

```Javascript
        <InputComponentReact
          type="text"
          label="First Name"
        />
        <InputComponentReact
          type="text"
          label="Last Name"
        />
        <InputComponentReact
          type="number"
          label="Price"
        />
        <InputComponentReact
          type="color"
          label="Color"
        />
        <InputComponentReact
          type="date"
          label="Date"
        />
        <InputComponentReact
          type="file"
          label="Upload Documents"
        />
```

## npm i input-component-react

See how easy it is! Add the package to your application and feel the difference
Visit the source code to know how to add functionalities to the form.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more about the package by visiting this link https://www.npmjs.com/package/input-component-react

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
