# Udacity Project: 
# Evaluate a news article with Natural Language Processing

## What We will be building

built web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. Using an exciting new api called Aylien, we can build a simple web interface to interact with their NLP system. This tool will give us back pertinent information about the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

* Node and express will be the webserver and routing.
* Using webpack, setting up the app to have development and production environments, each with their own set of tools and commands.
* Using Jest to test our route and other JavaScript functions of our application


## Run the project.
cd into your new folder and run:

`sudo yarn`, or `npm install`

note that yarn is prefered.

### run in development mode
To start the webpack dev server at port 8080

` $ npm run build-dev`

### run in production mode
Generate the dist files and then start server at port 3000

` $ sudo npm run build-prod`

` $ npm run start`


## Getting started

`cd` into your new folder and run:
- `npm install`

## Setting up the API

### Step 1: Signup for an API key
First, you will need to go [here](https://developer.aylien.com/signup). Signing up will get you an API key. Don't worry, at the time of this course, the API is free to use up to 1000 requests per day or 333 intensive requests. It is free to check how many requests you have remaining for the day.
### Step 2: Require the SDK package
Create a new .env file in the root of your project and  fill it with your on credentials
```
API_ID=**************************
API_KEY=**************************
```