# URL Shortener Backend

The backend server for the URL Shortener application, built with Node.js, Express, and MongoDB.

## Features

- RESTful API endpoints
- User authentication with JWT
- MongoDB database integration
- URL shortening and management
- Click tracking
- TypeScript for type safety

## Prerequisites

- Node.js (v18 or higher)
- MongoDB
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory:
```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

3. Start the development server:
```bash
npm run dev
```

## API Documentation

### Authentication

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get Current User
```http
GET /api/auth/me
Authorization: Bearer <token>
```

### URLs

#### Create Short URL
```http
POST /api/urls
Content-Type: application/json
Authorization: Bearer <token>

{
  "originalUrl": "https://example.com"
}
```

#### Get User's URLs
```http
GET /api/urls
Authorization: Bearer <token>
```

#### Delete URL
```http
DELETE /api/urls/:id
Authorization: Bearer <token>
```

#### Redirect to Original URL
```http
GET /api/urls/:shortUrl
```

## Development

### Project Structure
```
backend/
├── src/
│   ├── config/        # Configuration files
│   ├── controllers/   # Route controllers
│   ├── middleware/    # Custom middleware
│   ├── models/        # Database models
│   ├── routes/        # API routes
│   ├── types/         # TypeScript type definitions
│   └── index.ts       # Application entry point
├── .env              # Environment variables
├── package.json      # Project dependencies
└── tsconfig.json     # TypeScript configuration
```

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build TypeScript code
- `npm start` - Start production server
- `npm test` - Run tests

## Deployment

1. Build the TypeScript code:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## License

MIT 