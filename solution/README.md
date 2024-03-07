# EasyXchange Coding Solution

This project simulates a vehicle registration system where new vehicles can be registered with a unique number plate, and number plates are issued sequentially following specific rules. I decided to do it all in a single file for simplicity although I could have sepereated them into the main file and a file that deals with the functions that process the commands. I used Javascript because it is a lot easier to set up as opposed to my main language which is PHP which has a lot of requirements to get anything running. Also a lot more people are familiar with javascript and I always believe its best to go with familiarity when developing things. Tests are done in Jest, havent used it before but it was pretty straight forward. Not the best tester or commentor but I did add those that I thought were relevant.

## Prerequisits 
You need Node.js and npm installed on your machine to run this project. If you don't have Node.js and npm installed, download and install them from Node.js official website. you will also need to install the Jest package for testing.

## Running the application
The application can be run from the command line and will prompt you to enter commands to either register a new vehicle or issue a new number plate.
```
npm install
node index.js
```

## Running the Tests
The application can be run from the command line and will prompt you to enter commands to either register a new vehicle or issue a new number plate.
```
npm install --save-dev jest
npm test
```

## Built With
- Node.js - The JavaScript runtime used
- Jest - Testing framework