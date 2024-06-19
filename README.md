Random Video Picker

Random Video Picker is a web application that provides a random YouTube video from any channel you choose. This project uses Node.js and Express.js to create the backend server.
Features

    Select a YouTube channel to get random videos.
    Simple and intuitive interface.

Prerequisites

Before you begin, ensure you have met the following requirements:

    You have installed Node.js and npm.
    You have a YouTube API key.

Installation

    Clone the repository to your local machine:

git clone <repository-url>

Navigate to the project directory:

cd random-video-picker

Install the dependencies:

npm install

Create a .env file in the root directory and add your YouTube API key:

env

    API_KEY=your_youtube_api_key

Usage

To start the development server, run:

npm run dev

To start the application in production mode, run:

npm start

The server will be running at http://localhost:10000.
Project Structure

    .env: Environment variables.
    .gitignore: Git ignore file.
    node_modules/: Project dependencies.
    package.json: Project metadata and dependencies.
    package-lock.json: Lockfile for project dependencies.
    public/: Static files served by the server.
    src/: Source code for the application.

Dependencies

    cors: ^2.8.5
    dotenv: ^16.4.5
    express: ^4.19.2

Dev Dependencies

    nodemon: ^3.1.1

Contributing

To contribute to this project, follow these steps:

    Fork the repository.
    Create a new branch (git checkout -b feature-foo).
    Make your changes.
    Commit your changes (git commit -m 'Add foo feature').
    Push to the branch (git push origin feature-foo).
    Create a pull request.

License

This project is licensed under the ISC License.

Feel free to reach out if you have any questions or need further assistance. Happy coding! ​
​
