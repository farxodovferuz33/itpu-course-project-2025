# itpu-course-project-2025
Final Graduation Project for ITPU Semester 6 (2025) – A comprehensive course project representing the culmination of university studies. This repository contains the development, documentation, and deliverables for the last semester's capstone project.

Overview
This project is a full-stack application built using modern technologies. The backend is powered by Java 17 , Spring Boot , Spring Security with JWT , JPA/Hibernate , and PostgreSQL for database management. The frontend is built with React , and the admin panel is also developed using React, running on separate ports for better organization.

The application includes a robust authentication system, including 2-step authentication via Telegram Bot for enhanced security. Below are detailed instructions to set up and run the project locally.

Table of Contents
Prerequisites
Backend Setup
Database Configuration
Building the Backend
Running the Backend
Frontend Setup
Admin Panel Setup
Authentication Process
Project Execution
Prerequisites
Before proceeding, ensure that your development environment meets the following requirements:

Java Development Kit (JDK): Version 17 or higher.
Apache Maven: For building the backend project.
Node.js: For running the frontend and admin panel.
PostgreSQL: A running instance of PostgreSQL database server.
Telegram Bot: Set up a Telegram bot for 2-step authentication (optional but recommended).
Backend Setup
Database Configuration
Ensure that PostgreSQL is installed and running on your machine.
By default, the application expects a database named postgres. If this database does not exist, create it using the following SQL command:
sql


1
CREATE DATABASE postgres;
Update the database connection settings in the application.properties or application.yml file located in the backend's src/main/resources directory if necessary. Example configuration:
properties


1
2
3
spring.datasource.url=jdbc:postgresql://localhost:5432/postgres
spring.datasource.username=your_username
spring.datasource.password=your_password
Building the Backend
To build the backend project, execute the following Maven command in the root directory of the backend:

bash


1
mvn clean package
This command will:

Clean previous builds.
Compile the source code.
Run tests.
Package the application into a JAR file located in the target/ directory.
Running the Backend
Once the build process is complete, start the backend application using the following command:

bash


1
java -jar target/backend-1.0-SNAPSHOT.jar
The backend will start running on http://localhost:8080 by default.

Frontend Setup
Navigate to the frontend directory:
bash


1
cd path/to/frontend
Install the required dependencies:
bash


1
npm install
Start the frontend application:
bash


1
npm start
The frontend will automatically run on http://localhost:3000.

Admin Panel Setup
Navigate to the admin panel directory:
bash


1
cd path/to/admin-panel
Install the required dependencies:
bash


1
npm install
Start the admin panel application:
bash


1
npm start
The admin panel will automatically run on http://localhost:3001. You will be prompted to confirm the port; press Y to proceed.

Authentication Process
Access the admin panel dashboard at http://localhost:3001.
When navigating to restricted sections such as "Feedback" or other parts of the admin panel, you will be required to authenticate.
The system will send a confirmation code via a Telegram Bot to the admin account specified in the database.
Enter the received confirmation code to proceed.
You will be redirected to the login page, where you can use the following credentials:
Username: FERUZ
Password: 123
This process ensures 2-step authentication for enhanced security.

Project Execution
Start the backend application first.
Once the backend is running, start the frontend application.
Finally, start the admin panel.
Access the frontend at http://localhost:3000 and the admin panel at http://localhost:3001.
Additional Notes
Ensure that all services (backend, frontend, and admin panel) are running simultaneously for seamless interaction.
If you encounter any issues, check the logs for detailed error messages.
For production deployment, consider configuring environment variables and securing sensitive information such as database credentials and Telegram bot tokens.