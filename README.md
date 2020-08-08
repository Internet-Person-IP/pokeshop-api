
  

# Pokemon REST API

  
## Disclaimer
  
The project should include a file called serverless.env.json which is for enviroment variables but since we cannot display it on github for security reason that file has been hidden. To be clear it is just a normal json file with some env variables.
  

## Abstract
This project is one of my worst project and which I am the least proud of. The project is a Pokemon REST API that lets me get the ID,Name,ATK,DEF and HP of each pokemon. I had to scrape certain parts of the web to create the Database. The API can be found here:


[https://f7isneh248.execute-api.eu-north-1.amazonaws.com/dev](https://f7isneh248.execute-api.eu-north-1.amazonaws.com/dev)

The important Technologies used where Serverless,Express and MongoDB. The hosting was on AWS.

  

## Chapters

  

  

### 1. [Introduction](#1-introduction-1)

  

### 2. [Purpose](#2-purpose-1)

  

### 3. [Technology Stack](#3-technology-stack-1)

  

  

  

## 1. Introduction

It is a pokemon API that is the worst of its kind. It has one purpose and it does that well which give me a list of pokemon in a good format.

## 2. Purpose

The purpose of this project was to be used in another project where I needed the pokemon and their STATS. This form of API already existed online, but the owner of the API had som CORS settings that made it impossible for me to access it. It is therefore I
creating this.... It is purely needed as a way to access small amounts of data and required way to much work which is why I hate it. 
  

## 3. Technology Stack

  

The stack consist of a couple of aspects:

1. [Express.js](https://expressjs.com/) - Express was used since it made the development of the API quite streamline and there was alot of Information of Express.

  

2. [AWS Lambda using Serverless HTTP](https://www.npmjs.com/package/serverless-http) - AWS Lambda was used as a cheap way to host this infrastucture. AWS Lambda is free for the first million request made which made the backend infrastucture free. Using the Serverless HTTP module found in NPM we were able to fully convert the Express backend to a single lambda function. This however can possibly have issues with performance, so in production I would not recommend this approach.

  

3. [Serverless Framework](https://serverless.com/) - The serverless framwork was used since deployment is quite simple. You setup an IAM user and setup the serverless.yaml file and type sls deploy in the console. The framwork spits out an endpoint and there you have your entire infrastucture.

  

4. [Database](https://www.mongodb.com/) - MongoDB was used with Mongoose since it provides a simple abstraction and it is easy to store data.

5. [Hosting](https://aws.amazon.com/) - The hosting platform that was used in AWS. The free tier was quite generous and it was easy to convert an express api to a single lambda function.

