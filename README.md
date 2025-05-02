# Full-Stack React & Node.js Project

## Project Overview

This project is a full-stack web application consisting of a React frontend and a Node.js backend. The frontend is built with React and Vite, styled with TailwindCSS, and uses React Router for navigation. The backend is built with Express.js, using MongoDB for data persistence via Mongoose, and includes authentication and contact form handling.

---

## Technologies Used

### Frontend (Client)
- React 19
- Vite (build tool)
- TailwindCSS (styling)
- Framer Motion (animations)
- React Router DOM (routing)
- Material Tailwind React (UI components)
- Lucide React (icons)
- ESLint (linting)

### Backend (Server)
- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT) for authentication
- Bcrypt for password hashing
- CORS for cross-origin resource sharing
- Dotenv for environment variable management
- Zod for schema validation
- Nodemon for development

---

## Installation

### Prerequisites
- Node.js (v16 or higher recommended)
- MongoDB instance (local or cloud)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/simha10/SkillSpark.git
   cd SkillSpark
   ```

2. Install dependencies for the client:
   ```bash
   cd client
   npm install
   ```

3. Install dependencies for the server:
   ```bash
   cd ../server
   npm install
   ```

4. Configure environment variables for the server:
   Create a `.env` file in the `server` directory with the necessary variables such as:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

---

## Running the Project

### Start the backend server

From the `server` directory, run:
```bash
npm start
```
(Note: You may want to use `nodemon server.js` for development to auto-restart on changes.)

### Start the frontend client

From the `client` directory, run:
```bash
npm run dev
```
This will start the Vite development server and open the React app in your browser.

---

## Project Structure

```
/client
  ├── public/               # Static assets
  ├── src/
  │   ├── assets/           # Images and icons
  │   ├── components/       # React components
  │   ├── data/             # Static data files
  │   ├── pages/            # React pages
  │   ├── store/            # State management (context, hooks)
  │   ├── App.jsx           # Main app component
  │   └── main.jsx          # Entry point
  ├── package.json          # Client dependencies and scripts
  └── vite.config.js        # Vite configuration

/server
  ├── controller/           # Express route controllers
  ├── middleware/           # Express middleware
  ├── models/               # Mongoose models
  ├── router/               # Express routers
  ├── utils/                # Utility functions
  ├── validators/           # Request validators
  ├── server.js             # Express app entry point
  ├── package.json          # Server dependencies and scripts
  └── .env                  # Environment variables (not committed)
```

---

## License

This project is licensed under the MIT License.

---

For more details on the client setup, see the [client/README.md](client/README.md).
