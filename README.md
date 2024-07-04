Chat Application Frontend

This is the frontend for the Chat Application, built using React.
Prerequisites

    Node.js and npm

Setup

    Clone the repository:

    bash

git clone <repository-url>
cd chat-application-frontend

Install Dependencies:

bash

npm install

Run the Application:

bash

    npm start

Summary of Components
Environment Configuration

    Purpose: Distinguishes between development and production environments.
    Usage: Configures the API endpoint based on the environment.

WebSocket Connection

    Purpose: Establishes a WebSocket connection to receive real-time messages.
    Endpoint: Connects to the backend WebSocket endpoint at /ws.
    Authentication: Includes JWT token in connection headers for secure communication.

Redux Setup

    Chat Slice: Manages chat state, including sending and receiving messages.
    User Slice: Manages user authentication state, including login and logout actions.

Axios HTTP Requests

    Purpose: Handles all HTTP requests (GET, POST, PUT, DELETE) to the backend.
    Configuration: Adjusts the base URL depending on the environment (development or production).

Key Features

    User Authentication: Allows users to register and log in.
    Real-Time Messaging: Enables real-time chat functionality using WebSocket.
    Chat Rooms: Supports multiple chat rooms, with messages scoped to individual rooms.
