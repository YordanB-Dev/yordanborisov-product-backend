Node.js | Express | PostgreSQL

# Product Management API

Simple application for creating, editing and deleting products. Built with Node.js and PostgreSQL.

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env` file with database credentials:
   ```
   DB_USER=
   DB_HOST=
   DB_NAME=
   DB_PASSWORD=
   DB_PORT=
   PORT=
   ```

## Running

```bash
npm start
```

Server will run on `http://localhost:****`

## API Endpoints

- `GET /api/` - Get all products
- `GET /api/:id` - Get a product
- `POST /api/` - Create product
- `PUT /api/:id` - Update product
- `DELETE /api/:id` - Delete product

## Architecture

This project follows a layered architecture:

- **Controller** → handles HTTP requests
- **Service** → contains business logic
- **Repository** → communicates with the database
- **Middleware** → error handling and validation

##error handling

400 – Validation error
404 – Product not found
500 – Server error

## Example Request

```http
POST /api

{
  "name": "Laptop",
  "price": 1200
}
```

## Requirements

- Node.js
- PostgreSQL


