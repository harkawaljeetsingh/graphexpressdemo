/**
# GraphExpressDemo

This project is a simple Express application that uses TypeScript to fetch user information from the Microsoft Graph API. It demonstrates how to authenticate with the Microsoft Identity platform and make requests to the Graph API to retrieve user data.

## Prerequisites

Before running this project, make sure you have the following:

- Node.js and npm installed on your machine.
- Microsoft 365 Developer account.
- Registered application in the [Microsoft 365 Developer Portal](https://apps.dev.microsoft.com/).
- Application ID (Client ID), Application Secret (Client Secret), and Tenant ID from the registered application.

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/MicrosoftGraphExpressDemo.git
Navigate to the project directory:

bash
Copy code
cd MicrosoftGraphExpressDemo
Install dependencies:

bash
Copy code
npm install
Configure your application:

Replace the placeholder values in app.ts with your Application ID, Application Secret, and Tenant ID from the Microsoft 365 Developer Portal.

Compile TypeScript to JavaScript:

bash
Copy code
npm run build
Start the application:

bash
Copy code
npm start
Open your browser and visit http://localhost:3000/ to see the JSON response with user information from Microsoft 365.

Scripts
npm start: Start the application.
npm run build: Compile TypeScript to JavaScript.
npm run dev: Run the application in development mode with ts-node.
