# Expense Daddy (MERN Stack App)

## Project Overview

Expense Daddy is a full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to register, log in, and manage their personal expenses. Authenticated users can add, view, and delete expenses, each with a title, amount, and payment type. The backend is secured with JWT-based authentication.

---

## Features

### User Authentication
- User registration and login with email and password.
- Passwords are securely hashed using bcrypt.
- JWT tokens are used for session management.
- Protected routes for expense management.

### Expense Management
- Add new expenses (title, amount, payment type).
- View a list of your expenses, sorted by creation date.
- Delete expenses.
- All expense actions are scoped to the authenticated user.

### Frontend
- Built with React.
- Responsive UI for login, signup, and expense management.
- Navigation bar with authentication-aware links and logout.

### Backend
- RESTful API built with Express.
- MongoDB for data storage, using Mongoose models.
- Environment variables for configuration (MongoDB URI, JWT secret, etc).

---

## Project Structure

```
MERN-App/
  frontend/      # React frontend
  server/        # Express backend
```

---

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- MongoDB instance (local or cloud)

### Backend Setup

1. Install dependencies:
   ```
   cd server
   npm install
   ```
2. Create a `.env` file in the `server` directory with:
   ```
   MONGO_URI=your_mongodb_connection_string
   SECRET=your_jwt_secret
   PORT=4000
   ```
3. Start the backend server:
   ```
   npm run dev
   ```
   The backend will run on `http://localhost:4000`.

### Frontend Setup

1. Install dependencies:
   ```
   cd frontend
   npm install
   ```
2. Start the frontend:
   ```
   npm start
   ```
   The frontend will run on `http://localhost:3000` and proxy API requests to the backend.

---

## Environment Variables

You must provide the following in your backend `.env` file:
- `MONGO_URI` — MongoDB connection string
- `SECRET` — JWT secret key
- `PORT` — Port for the backend server (default: 4000)

---

## Scripts

### Backend
- `npm run dev` — Start backend with nodemon
- `npm start` — Start backend with node

### Frontend
- `npm start` — Start React development server
- `npm run build` — Build for production

---

## License

This project is provided as-is for educational purposes. 