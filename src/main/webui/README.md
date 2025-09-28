<h1 align="center"> Web UI for Sentiment Analysis </h1>

This is the frontend for the Quarkus + Python sentiment analysis demo. Built
with React and Vite, it provides a modern, responsive interface for analyzing
text sentiment using a backend powered by Quarkus and GraalPy.

## Features

- Input text and receive sentiment analysis results (positive, neutral,
  negative)
- Fast and interactive user experience
- Connects to the backend REST API for real-time analysis

## Getting Started

### Prerequisites

- Node.js & npm

### Setup & Run

1. Install dependencies:

   ```sh
   npm install
   ```

2. Start the development server:

   ```sh
   npm run dev
   ```

The app will be available at `http://localhost:5173` (or the port shown in your
terminal).

## Project Structure

- `src/components` – UI components
- `src/pages` – Main pages and routing
- `src/api` – API calls to backend

## Credits

This UI is part of the Quarkus + GraalPy demo project. For backend details, see
the main project README.
