# Socket.io Chat Application

This is a real-time chat application built using **TypeScript, Express, and Socket.io**. The project follows a structured folder setup for better maintainability.

## Project Structure
```
TSSOCKET_IO_PROJECT/
│── server/
│   ├── node_modules/
│   ├── src/
│   │   ├── public/
│   │   │   ├── index.html
│   │   ├── app.ts
│   ├── .gitignore
│   ├── nodemon.json
│   ├── package.json
│   ├── package-lock.json
│   ├── tsconfig.json
```

## Prerequisites
Ensure you have the following installed:
- **Node.js** (v16+ recommended)
- **TypeScript**
- **Socket.io**

## Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/your-repo/socketio-chat-app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd TSSOCKET_IO_PROJECT/server
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Running the Server
To start the server, use:
```sh
npm run dev
```
This will start the server at **http://localhost:5015/**.

## Folder & File Explanation
### 1. `app.ts` (Backend)
This file initializes the **Express server** and configures **Socket.io** for real-time communication.

- Establishes a WebSocket connection with clients.
- Listens for user messages and broadcasts them to all connected clients.
- Serves static files from `public/`.

### 2. `public/index.html` (Frontend)
The frontend file contains:
- A simple chat UI.
- **Socket.io client script** for sending and receiving messages.
- Prompts users for a username before joining the chat.

### 3. `tsconfig.json`
TypeScript configuration file ensuring compatibility and type safety.

## Features
✅ Real-time messaging using **Socket.io**
✅ TypeScript-based backend for scalability
✅ Simple UI for sending and receiving messages
✅ Auto-reconnect support

## Deployment
For production, build the TypeScript files and run the compiled JavaScript:
```sh
npm run build
npm start
```

Please Feel free to modify and use it in your projects!

