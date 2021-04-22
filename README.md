[![Netlify Status](https://api.netlify.com/api/v1/badges/73d211de-957e-4757-b4bf-bd9202689882/deploy-status)](https://app.netlify.com/sites/gallant-lalande-7641f1/deploys)
# Endless

View the site [here](https://endless.kyranmccann.com/).  

## Initialization and Setup
Install node modules first with the `yarn` command.

You can run the application with the `yarn start` command.

Run `yarn test` in order to run the test suite.

## Some Choices Made
I chose to use a splash screen on a timeout function so that all images and api calls have already loaded when a user sees the full site. I chose to use react-transition-group to facilitate mounting and unmounting the splash page, but all of the animations for the logo, loader, and button hovers are done with pure CSS. 

In case of very, very slow internet there is still a fallback for the hero that loads a solid color box (I chose a dark color from the image to make the transition easier on the eyes) until the image has loaded. 

The animated loader featured on the splash page will also display in the place of the steps content if the api call has not returned by the splash page timeout. 

To view those ui features in their natural habitat, comment out the Splash component in App.js and use chrome dev tools to slow the network speed to slow 3G (open dev tools, navigate to the network tab, and change the dropdown that defaults to "No throttling" to "Slow 3G"). 

