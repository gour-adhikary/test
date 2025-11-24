# Test Backend Server

A simple TypeScript backend server built with Express.js, designed for deployment on Render with automated CI/CD pipeline.

## 🚀 Features

- **TypeScript**: Fully typed backend with modern ES2020 features
- **Express.js**: Fast, minimalist web framework
- **Security**: Helmet for security headers, CORS enabled
- **Health Checks**: Built-in health monitoring endpoints
- **Testing**: Comprehensive test suite with Jest and Supertest
- **Linting**: ESLint with TypeScript rules
- **CI/CD**: GitHub Actions pipeline with automatic deployment
- **Docker Ready**: Containerized for easy deployment

## 📁 Project Structure

```
├── src/
│   ├── __tests__/          # Test files
│   ├── middleware/         # Express middleware
│   ├── routes/            # API routes
│   ├── app.ts             # Express app configuration
│   ├── index.ts           # Server entry point
│   └── test-setup.ts      # Test configuration
├── .github/workflows/     # GitHub Actions CI/CD
├── dist/                  # Compiled JavaScript (generated)
├── coverage/              # Test coverage reports (generated)
├── Dockerfile             # Docker configuration
├── render.yaml           # Render deployment config
└── package.json          # Dependencies and scripts
```

## 🛠️ API Endpoints

### Health Check
- `GET /health` - Basic health check
- `GET /health/detailed` - Detailed health information

### User API
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user

### Root
- `GET /` - Welcome message with server info

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18.x or 20.x
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd test-backend-server
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Build the project:
```bash
npm run build
```

5. Start the development server:
```bash
npm run dev
```

6. Or start the production server:
```bash
npm start
```

The server will be running at `http://localhost:3000`

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Run linting:
```bash
npm run lint
```

Fix linting issues:
```bash
npm run lint:fix
```

## 🐳 Docker

Build and run with Docker:
```bash
# Build the image
docker build -t test-backend-server .

# Run the container
docker run -p 3000:3000 test-backend-server
```

## 🚢 Deployment on Render

### Prerequisites
1. GitHub account with this repository
2. Render account (free tier available)

### Automatic Deployment Setup

1. **Fork/Clone this repository to your GitHub account**

2. **Connect to Render:**
   - Go to [Render](https://render.com)
   - Sign up/in with your GitHub account
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

3. **Configure the service:**
   - **Name**: `test-backend-server` (or your preferred name)
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free (or paid for production)

4. **Set Environment Variables:**
   - `NODE_ENV`: `production`
   - `PORT`: `10000` (Render's default)

5. **Enable Auto-Deploy:**
   - Check "Auto-Deploy" option
   - Set branch to `main`

### Manual Deployment

If you prefer manual deployment:

```bash
# Build the project
npm run build

# Deploy using Render CLI (if installed)
render deploy
```

## 🔄 CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/ci-cd.yml`) automatically:

1. **On Pull Requests & Pushes to main:**
   - Runs tests on Node.js 18.x and 20.x
   - Performs security audit
   - Runs linting
   - Builds the application

2. **On Push to main (after tests pass):**
   - Deploys to Render automatically
   - Performs health check
   - Notifies of deployment status

### Setting up CI/CD Secrets

Add these secrets to your GitHub repository settings:

1. Go to your repository → Settings → Secrets and variables → Actions
2. Add the following secrets:
   - `RENDER_SERVICE_ID`: Your Render service ID
   - `RENDER_API_KEY`: Your Render API key
   - `RENDER_SERVICE_URL`: Your deployed service URL

To find these values:
- **Service ID**: In Render dashboard → Your service → Settings → Service ID
- **API Key**: Render Account Settings → API Keys → Create New
- **Service URL**: Your deployed service URL (e.g., `https://your-service.onrender.com`)

## 🔧 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `development` |
| `PORT` | Server port | `3000` |

## 📊 Monitoring

### Health Checks
- Basic: `GET /health`
- Detailed: `GET /health/detailed` (includes memory usage, uptime, etc.)

### Logs
The application logs:
- Server startup information
- Request errors
- Environment details

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start production server |
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build TypeScript to JavaScript |
| `npm test` | Run test suite |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Check code style |
| `npm run lint:fix` | Fix code style issues |

## 🛡️ Security

- Helmet.js for security headers
- CORS enabled for cross-origin requests
- Input validation on API endpoints
- Regular security audits via npm audit

## 📄 License

This project is licensed under the ISC License.

## 🚀 Deployment Status

Once deployed, your API will be available at: `https://your-service-name.onrender.com`

Test endpoints:
- Health: `https://your-service-name.onrender.com/health`
- API: `https://your-service-name.onrender.com/api/users`

---

**Happy coding! 🎉**
