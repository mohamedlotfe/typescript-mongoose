# A simple APIs using TypeScript with Mongoose

In this repo I created a simple endpoint that make some CRUD operations for Authors and Books

## What does this repo contains?

- Start with Server.ts
  - Connect to Mongo
  - Start Server if Mongoose Connects
  - Log the request
  - Log the request & response
  - Healthcheck endpoint
  - Some security Rules of our APIs
  - Error handling
- Config -> config.ts
  - load my configuration values from .env file
  - export them
- Controllers -> index.ts [Author.controller.ts , Book.controller.ts]
  - Fetch the body of the request if it exists
  - make the CRUD operations for each model [it should done by Service Layer for sure but it simple structure ]
- Library
  - which have a Looger library 'chalk' (also we can use winston lib as replacment)
  - which log every details for requests and responses
  - with different type of logging (warn, hint, error, etc)
- Middlewares
  - use joi Library to check for required parameters/body for the request
  - matched with sechmas for each model
- Models
  - contains the main models which are Author and Book
  - include the interfaces for each model
- Routes
  - include the routes for each model
  - with different type of Requests [GET, POST, PUT, etc]
