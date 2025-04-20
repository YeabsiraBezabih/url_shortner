# URL Shortener Frontend

The frontend application for the URL Shortener, built with React, TypeScript, and Tailwind CSS.

## Features

- Modern, responsive UI
- User authentication
- URL shortening
- Dashboard for managing URLs
- Click tracking
- TypeScript for type safety

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at http://localhost:5173

## Project Structure

```
frontend/
├── src/
│   ├── api/           # API configuration and calls
│   ├── components/    # Reusable components
│   ├── context/       # React context providers
│   ├── pages/         # Page components
│   ├── types/         # TypeScript type definitions
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
├── public/           # Static assets
├── package.json      # Project dependencies
└── tsconfig.json     # TypeScript configuration
```

## Development

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Router
- Axios
- JWT Authentication

## Deployment

1. Build the application:
```bash
npm run build
```

2. Deploy the contents of the `dist` folder to your hosting service.

## Environment Variables

Create a `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:5000/api
```

## License

MIT
