  
## YNAP Test


 - Used Create React App
 - Express.js for server side rendering
 - Styled Components for styling
 - Built page Mobile First
 - Used `position: sticky` (the *very* simple way) for sticky columns,
   depending on browser matrix and need for older browser compatibility
   I would write on scroll functions to add `position:fixed`.
 - For the parallax header I created a function that increases the
   scroll speed for a specific component. The target `ref` changes depending on the viewport size (mobile = text, desktop = hero image).
   
 - Used jest-styled-components to writesnapshot tests for the UI components.
 - Used Enzyme to check for an element when a UI component can have different rendered markup depending on its props.
 


## To run app:
   
### `$ yarn install`
### `$ yarn build`
### `$ node server`

Open [http://localhost:8080](http://localhost:8080) to view it in the browser.


 
 
<br>

### `$ yarn test`

Launches the test runner in the interactive watch mode.<br>

 