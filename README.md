# EnviroCorp Weather Dashboard 2070

Welcome to the EnviroCorp Weather Dashboard project! This application provides a futuristic interface for accessing weather services using advanced space-based climate control technology.

## Project Structure

The project is divided into two main parts: the backend and the frontend.

### Backend

- **src/server.js**: Entry point for the backend application. Initializes the Express server and sets up middleware and routes.
- **src/controllers/weatherController.js**: Contains the `WeatherController` class with methods for handling weather-related requests.
- **src/routes/weatherRoutes.js**: Defines API endpoints for weather services and links them to the appropriate controller methods.
- **src/middleware/auth.js**: Middleware functions for authentication to secure certain routes.
- **src/utils/index.js**: Utility functions for generating unique IDs and handling file uploads.
- **package.json**: Configuration file listing dependencies and scripts for starting the server.
- **.env**: Contains environment variables for configuration.

### Frontend

- **public/index.html**: Main HTML file for the frontend application, linking to the Tailwind CSS stylesheet.
- **src/app.js**: Entry point for the frontend application, initializing the React app and setting up routing.
- **src/components/Dashboard.js**: Renders the main layout of the dashboard, including sidebar and top navigation.
- **src/components/WeatherWidget.js**: Displays weather information and allows users to order different weather types.
- **src/components/ControlPanel.js**: Includes input fields for GPS control, land verification, and subscription options.
- **src/styles/tailwind.css**: Contains Tailwind CSS styles implementing neon and glassmorphism effects.
- **tailwind.config.js**: Configuration file for Tailwind CSS, specifying custom styles and themes.
- **postcss.config.js**: Configuration file for PostCSS, processing the CSS files.
- **package.json**: Configuration file listing dependencies and scripts for building and running the frontend application.

## Features

- **Weather Ordering**: Users can order different types of weather through the WeatherWidget component.
- **Land Verification**: The ControlPanel component allows users to verify land for weather services.
- **Recommendations**: The application provides weather recommendations based on user input.
- **Responsive Design**: Built with Tailwind CSS for a modern and responsive user interface.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd envirocorp-dashboard-2070
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Set up environment variables in the `.env` file.

4. Start the backend server:
   ```
   npm start
   ```

5. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

6. Start the frontend application:
   ```
   npm start
   ```

## License

This project is licensed under the MIT License.