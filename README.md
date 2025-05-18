# Project Setup Guide

This guide will help you set up and run the complete application, which includes a PostgreSQL database, a user panel, and an admin panel.

---

## 🗄️ Step 1: PostgreSQL Database Setup

1. **Install PostgreSQL** if it's not already installed.
2. **Set the default PostgreSQL password** to `123` for the default user (usually `postgres`):
    - You can set the password using:
      ```sql
      ALTER USER postgres WITH PASSWORD '123';
      ```
3. **Start the PostgreSQL server**.

---

## 🗃️ Step 2: Database Initialization

- The application will automatically create the necessary tables on first run.
- Ensure the database is running and accessible with the credentials:
    - **User**: `postgres`
    - **Password**: `123`
    - **Host**: `localhost`
    - **Port**: `5432`
    - **Database name**: defined in your project configuration.

---

## 💻 Step 3: Run the Frontend (User Panel)

1. Navigate to the user panel directory:
   ```bash
   cd frontend

Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm start
🛠️ Step 4: Run the Admin Panel
Navigate to the admin panel directory:

bash
Copy
Edit
cd admin-panel
Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm start
🔐 Admin Panel Login & Security
2-Step Verification is enabled for the admin panel.

A verification code will be sent only to you (project owner) when logging in.

Default Admin Credentials:

Username: FERUZ

Password: 123

⚠️ Please change the default admin password after first login for security.

📄 Documentation
Full documentation and project thesis can be found in the docs/ folder.

The thesis includes:

Project goals and scope

System architecture

Database schema

Features and functionality

Screenshots and workflows

Future improvements

✅ Tips
Ensure ports used by frontend and admin panels are not blocked.

If you encounter any issues during database connection, double-check your environment variables and PostgreSQL service status.