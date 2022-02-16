## Code of Conduct

* All work must include a README with the following elements:

    * Must have:
        * Assignment title
        * Installation & usage
        * Changelog
        * Bugs

    * Could have:
        * Wins & Challenges

## Useful Tools

* [Markdown Guide](https://guides.github.com/features/mastering-markdown/)

## Example README

Below is an example of what a README could look like.

# Assignment 1

## Installation & Usage

### Installation

* Clone or download the repo.
* Open terminal and navigate to `fizzbuzz` folder.
* Run `npm install` to install dependencies.

### Usage

* Run `npm start` to launch server.
* Run `npm test` to launch test suite.

# Routes

### Routes
| **URL** | **HTTP Verb** |  **Action**|
|------------|-------------|------------|
| /thoughts/         | GET       | index  
| /thoughts/new      | GET       | new   ??
| /thoughts          | POST      | create   
| /thoughts/:id      | GET       | show  

# Server

## Posts
| id | title |  main | user_id|
|----|-------|-------|-------    |
|  1 |title1 | body1 | username1 |
|  2 |title2 | body2 | username2 |
|  3 |title3 | body3 | username3 |



## Changelog

### index.html

[x] Fixed filepath to correctly connect CSS to HTML file.

### server.js

[x] Updated `fizzbuzz` funtion to accept an arguement.

## Bugs

[] Function logs 15 as `fizz` when it should log `fizzbuzz`

## Wins & Challenges

### Wins

* Managed to implement a loop.
* Learned how to use modulus operator.

### Challenges

* Realised using return would not log all numbers up to the arguement number.
