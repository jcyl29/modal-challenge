# Modal Challenge

This project was bootstrapped with [Create React App  (CFA)](https://github.com/facebook/create-react-app).

## Main Features
- On page load, show one button
- When button is clicked, open a modal
    - The modal should contain two panes side-by-side.
    - Left pane shows the coupon code details.

### Modal will include these features:
- X close button that hides the current modal.
- Logo image of the store the coupon is for.
- Title of the coupon.
- Description of the coupon.
- Text box to display the coupon code.
- Button that copies the coupon code to the user’s clipboard.
- Image icon that represents an email subscription form.
- Title for email subscription form.
- Text highlighting the benefits of subscribing.
- Text box for user’s email address.
- Button that submits the form.
 
## Error validation on email subscription form
- If an invalid email is entered, the input will have a red highlight
- An error message will also show below the input
- A OK response will show a message below the subscribe button
- A bad response will result if a user tries to subscribe the same email address again. In that case, an error message will show below the button indicating as such

### How to run locally
Clone this repo, then in the project directory, run:
```
yarn install
yarn start
```

json-server is used to build a simple mock server, it is used to handle the "POST request to an api endpoint" part of this challenge.  In another terminal tab, cd into the project directory, then run:
```
yarn json-server
``` 

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br/>