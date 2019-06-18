# Front-End Coding Challenge submission

## Description
This is my submission to the UR Front-End Coding Challenge using React as instructed.  
The webapp queries the GitHub API for the most starred and displays them as an infinitely scrollable list.

## Technologies
### Front-End Framework
React: As instructed, keep in mind this is a first attempt at using React and was done merely as a tutorial
### HTTP Client
Axios: Used it before, just works... On the other hand, I'm not using OAuth to authenticate to the API so rate limiting is of 10 requests/min, I willingly commented out the line enabling Basic Auth which was used during development for protecting the account credentials, you can go ahead and just uncomment it and use your own account if you want to test this more in depth.
### UI 
Bootstrap-react: I was just overwhelmed with how CSS changed: flexbox, css grid... so from scratch approach was not an option, using a React based UI framework would have meant basically redoing the app to comply with such frameworks architecture.  
### Date handling
MomentJS: How could I not?
### Infinite scrolling
This was done from scratch following on a good tutorial.  
I tried using `react-infinite-scroll-component` but kept getting problems because it kept sending all the requests at the same time... A few hours later it was time to move on.

## Running the app
Start by cloning the repo, duh!  
`git clone https://github.com/ElyasAktaou/UR-Front-End-Challenge.git`  
Install dependencies using npm  
`npm install`  
or yarn  
`yarn install`  
You can choose to run the live development mode with  
`npm start`  
Or serve yourself a production version  
`npm install -g serve`  
`serve -s build`  