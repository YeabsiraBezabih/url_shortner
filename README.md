# URL Shortener

A full-stack URL shortener application built with React, Node.js, Express, and MongoDB.

## Features

- Shorten long URLs
- User authentication (register/login)
- Dashboard to manage shortened URLs
- Track click statistics
- Modern, responsive UI with Tailwind CSS

## Tech Stack

### Frontend
- React with TypeScript
- Tailwind CSS for styling
- React Router for navigation
- Axios for API calls
- JWT for authentication

### Backend
- Node.js with Express
- MongoDB for database
- JWT for authentication
- TypeScript for type safety

## Project Structure

```
url_shortner/
├── frontend/          # React frontend application
├── backend/           # Node.js backend server
└── README.md         # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YeabsiraBezabih/url_shortner
cd url_shortner
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. Create a `.env` file in the backend directory:
```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

5. Start the backend server:
```bash
cd backend
npm run dev
```

6. Start the frontend development server:
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## Deployment

### Backend Deployment
1. Build the TypeScript code:
```bash
cd backend
npm run build
```

2. Start the production server:
```bash
npm start
```

### Frontend Deployment
1. Build the React application:
```bash
cd frontend
npm run build
```

2. Deploy the contents of the `dist` folder to your hosting service.

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user
- POST `/api/auth/logout` - Logout user
- GET `/api/auth/me` - Get current user

### URLs
- POST `/api/urls` - Create a new shortened URL
- GET `/api/urls` - Get all URLs for the current user
- DELETE `/api/urls/:id` - Delete a URL
- GET `/api/urls/:shortUrl` - Redirect to original URL

## License

MIT

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request 
