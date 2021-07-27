# React Todo Copilot

Almost all of the code was created with [GitHub Copilot](https://copilot.github.com/). This project is an experiment to see what would happen if you let Copilot try to intelligently create an entire app from just comments.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Want to try it yourself?
Before you begin, make sure you have the [Copilot Plugin](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) for VSCode. You also need to make sure that you have a GitHub account that can use Copilot.

To get started, you can either follow the `Rules`->`Setup` section below, or:
- Clone down the project: `git clone https://github.com/ASteinheiser/react-todo-copilot.git`
- Switch to the `base-template` branch: `git checkout -t origin/base-template`

And with that, you're good to go! Check out the `Rules`->`The Experiment` section for next steps...

# Rules
The goal here is to type as little code as possible and let Copilot go on "autopilot", so to speak ;)

## Setup
- Generate a base React project: `npx create-react-app react-todo-copilot`
- Remove unneeded files:
```
src/App.css
src/App.test.js
src/logo.svg
src/reportWebVitals.js
src/setupTests.js
```
- Remove unneeded packages:
```
@testing-library/jest-dom
@testing-library/react
@testing-library/user-event
web-vitals
```
- Install packages for [Material UI](https://material-ui.com/):
```
@material-ui/core
@material-ui/icons
```
- Add the following block inside the `<head>` tags in `public/index.html`:
```html
<!-- fonts and icons for @material-ui/core library -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```
- Remove `reportWebVitals()` call from `src/index.js`
- Delete all the code in `src/App.js` to prepare for Copilot magic

## The Experiment
Now that we have a minimal React app, and an empty `src/App.js`, we can start leveraging Copilot to create our Todo app. For this experiment, I will define a few rules that I will abide by:
- Everything will be kept in one file, as Copilot [currently only uses the context of the current file](https://github.com/github/copilot-preview/discussions/920#discussioncomment-1046402) to create suggestions
- Multiple comments can be made in the one file
- Each comment must entirely create it's respective component
- `@material-ui/core` components will be used to simplify styling

Now get started writing comments, press `tab`, and observe.

# Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
