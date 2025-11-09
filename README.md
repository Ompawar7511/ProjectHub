# FlyMail Frontend

A modern email web application built with React + Vite.

## Features

- ✅ User authentication (Login, Register, Forgot Password, Reset Password)
- ✅ Email inbox management
- ✅ Protected routes
- ✅ Modern, responsive UI

## Tech Stack

- React 19
- React Router v7
- Axios for API calls
- Context API for state management
- Vite for build tooling

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- Backend API running on http://localhost:5000

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure API URL (optional):
   - Create a `.env` file in the root directory
   - Add: `VITE_API_URL=http://localhost:5000/api`
   - Default is already set to `http://localhost:5000/api` in `src/utils/axios.js`

3. Start development server:
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── auth/           # Authentication components
│   ├── layout/         # Header and Sidebar
│   ├── Mail/           # Mail-related components
│   └── DashboardPage.jsx
├── context/
│   └── AuthContext.jsx # Global auth state
├── hooks/
│   └── useLocalStorage.js
├── services/           # API service functions
│   ├── authService.js
│   ├── mailService.js
│   └── adminService.js
├── utils/
│   ├── axios.js        # Axios instance with interceptors
│   └── constants.js
├── App.jsx
└── main.jsx
```

## API Endpoints

The app connects to the backend at http://localhost:5000/api

- `/users/register` - Register new user
- `/users/signin` - Login
- `/users/otp` - Request OTP for password reset
- `/users/reset-password` - Reset password with OTP

## Features in Detail

### Authentication
- Secure login with JWT tokens
- User registration with validation
- Password reset via OTP
- Protected routes requiring authentication


## License

MIT
