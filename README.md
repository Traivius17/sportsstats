# Index:

1. [System Deployment/Installation](#system-deploymentinstallation)
2. [Main Features Overview](#main-features-overview)
3. [User Interface](#user-interface)


## List of Figures
| Figure Number | Title of Figure | Page Number |
|---------------|-----------------|-------------|
| 3.1 | Navigation Bar | 5 |
| 3.2 | Footer | 6 |
| 3.3 | Home Page (a) | 7 |
| 3.4 | Home Page(b) | 7 |
| 3.5 | Home Page(c) | 7 |
| 3.6 | News Page | 8 |
| 3.7 | Contact Us Page | 8 |
| 3.8 | Player Search Page | 9 |
| 3.9 | Player Statistics | 9 |
| 3.10 | Team Statistics | 10 |

## 1. System Deployment/Installation 

### 1.1 Hardware and Software Requirements

To access our website, you have two options:

- **Option 1: Online Access**
  We provide a link to access the website, which is currently hosted on our systems. To use the website, ensure that you have a stable internet connection.

- **Option 2: Local Installation**
  If you prefer to install our code on your system for local testing, ensure that your system meets the following requirements:
  - Stable internet connection
  - Web server (e.g., Apache)
  - MySQL database
  - Modern web browser (e.g., Chrome, Firefox, Safari)
  - Node JS and npm

Here are the steps for installing Score Insights locally:

1. **Database Setup:**
   - Create a new MySQL database named "COSC625".
   - Import the provided SQL dump file (sports stat.sql) to set up the necessary tables.
 
2. **Web Application Deployment:**
   - Clone the COSC-625 repository from GitHub to your web server.
   - Alternatively, you can download the PHP, CSS, and React JS files and save them on your system. Then, open them on a web server.
   - Configure the database connection in connect.js
   - Ensure proper file permissions are set for directories like "uploads" for user profile pictures.
   - Ensure proper file permissions are set for running the React application.

**Available Scripts:**
In the project directory, you can run:

-`npm start`
- Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
- The page will reload when you make changes.
- You may also see any lint errors in the console.
- `npm test`
- Launches the test runner in the interactive watch mode.

## 2. Main Features Overview 

### 2.1. Basketball Statistics:

Embark on an in-depth exploration of basketball statistics, meticulously designed to offer users a comprehensive experience...

(Continue listing and describing features as provided)

## 3. User Interface

### 3.1. Navigation Bar
