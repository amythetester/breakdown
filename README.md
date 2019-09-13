## Breakdown: by Amy Wyatt

## Overview
Breakdown was created as a Capstone project for Ada Developers Academy in Seattle. This app serves as a proof of concept for what could be a more featureful future app. This project allowed me to build an app on my own and explore new technologies. There are two main components of this app: 1) The frontend React App and 2) a custom API endpoint Lambda function.

This repository contains the React App while the Lamdba function code is hosted in AWS. The React App serves as the primary user experience while the Lambda function was responsible for taking location data, gathering the current weather information for that location, and providing users with recommended next steps with weather in mind.

## Tech Stack
- Frontend: React.js, CSS, and HTML
- Backend: API Gateway, AWS Lambda function (Python), and OpenWeather API
- Infrastructure: CircleCI and AWS Amplify (S3 bucket)
- User testing instance: Heroku

## How to install and run
- Navigate to the folder that you would like to put the project files.
- Run `git clone <insert clone link here>`
- Install: `npm install`
- Run the app locally: `npm start`
- Run a build of the app: `npm run build`

## Future work
As a proof of concept there were several things I would have done differently if I were to start over:
- TDD. While I typically would TDD on a project like this, it was more important to get a proof of concept in the short timeframe that we had.
- More accessibility testing. There is always more work to be done here.
- Size by frequency rendering for the word clouds.
- Machine Learning for the next steps recommendations at the end of the user experience.
- Text analysis to look for harmful words (language about self-harm or harm of others, racist/sexist/etc. terminology that does the user more harm that is helpful).
