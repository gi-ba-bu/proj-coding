## Folder system

    ├── client  
    └── server (this works containerized)                    
        ├── /api           
        ├── /db         
        └── docker-compose.yaml


## Installation & Usage

### Installation

* Clone the repo.
* Open terminal and navigate to `server` folder.
* Run `docker compose up` to initialize containers.

### Usage

* Run `http-server` to launch the client on port 8080.

# CONTENT

## Server routes

| **URL** | **HTTP Verb** |  **Action**|
|------------|-------------|------------|
| /posts/    | GET         | index  
| /posts     | POST        | create   
| /posts/:id | GET         | show  



## Posts database structure
| id | title |  main | user_id|
|----|-------|-------|-------    |
|  1 |title1 | body1 | username1 |
|  2 |title2 | body2 | username2 |
|  3 |title3 | body3 | username3 |



## Changelog

### client

[x] Removed filepaths to server side 

[x] Add port nuber directly

[x] Added favicon

### server

[x] Removed users table

## Bugs

[] No route to retrieve messages on client side

## Wins & Challenges

### Wins

* Create and display workflow works nicely!

### Challenges

* Update rendering webage based on URL. 
