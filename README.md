
### Sports Stats Project Description:
Sports Stats represents a versatile and user-centric web application tailored for sports enthusiasts, delivering a comprehensive array of features to elevate your sporting experience. Whether you're an ardent fan, a fervent follower of fantasy sports, or someone seeking profound sports statistics, Sports Stats caters to your needs. Presently centered on basketball, our platform is primed for future expansion, harboring ambitious plans to encompass a wider spectrum of sports under a strategic vision.
Within the application, users can delve into team standings, individual player statistics, and team analytics specific to a chosen season. Navigating through these functionalities is seamless, facilitated by an intuitive and user-friendly interface that ensures swift and efficient exploration.
Moreover, users benefit from daily updates on NBA sports news, alongside personalized profile customization options offering various wallpapers, profile images, and the ability to select favorite teams. Additionally, a dedicated help and contact page enables direct communication, empowering users to send queries or seek assistance, and fostering responsive and supportive user-community interaction.

Use Case diagram:
 
<img width="324" alt="image" src="https://github.com/Traivius17/sportsstats/assets/114965842/641123a6-44f9-42b5-b19f-763b2f855c7f">



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
Embark on an in-depth exploration of basketball statistics, meticulously designed to offer users a comprehensive experience. This feature-rich platform provides detailed player profiles, comprehensive team statistics, and team standings within the NBA. Utilize the search functionality to access player statistics by season and last name, empowering users with precise and targeted information about their favorite players. Moreover, seamlessly navigate through team standings and statistics by filtering data based on the season and specific team, ensuring a customized and detailed overview of team performance.

### 2.2. User Profiles
Tailor your experience by creating a personalized user profile. Select your favorite teams and players to receive customized updates.

### 2.3 Quiz Section
Challenge your NBA knowledge with our interactive quiz section. Enjoy a fun and educational experience while testing your understanding of basketball.

### 2.4.Theme Customization
Personalize Score Stats to reflect your unique style by customizing its theme and appearance. Select from a range of themes, including a sleek dark mode option, and adorn it with the logos of all NBA teams for a complete and tailored experience.

## 3. User Interface

### 3.1. Navigation Bar

User Requirements: The user requires an easy-to-use and feature-packed navigation section that facilitates seamless navigation from the Home page to various sections such as Home Teams and Players.

<img width="468" alt="image" src="https://github.com/Traivius17/sportsstats/assets/114965842/19bde3b5-1cc3-436b-a18e-72faa12e08aa">

Functionalities:
The navigation bar provides an intuitive experience with the following features:
•	Clickable Buttons: Users can click on buttons in the navigation bar to access different sections of the website.
•	Hover Effect: When the user hovers the cursor over the buttons, there is a color change effect, providing visual feedback and enhancing the interactive experience.

### 3.2. Footer Section

User Requirement: The user requires an easy-to-use and feature-packed footer section for quick access to information and the Contact Us section.

<img width="471" alt="image" src="https://github.com/Traivius17/sportsstats/assets/114965842/2535642a-5744-4720-89ca-684b28c92e19">

Features:
The footer section offers the following features:
•	Contact Us Popup Box: A popup contact us box is available, allowing users to enter their queries conveniently.
•	Hover Effects: Every button in the footer has hover effects, enhancing the visual experience and interactivity.

### 3.3. Home Page

User Requirements: The client requires an easy-to-use and feature-packed home page that serves as an engaging introduction to the website, providing users with information and intuitive navigation to different sections.

<img width="360" alt="image" src="https://github.com/Traivius17/sportsstats/assets/114965842/9cf4c77b-c3c3-49a2-95a3-3052d4568d19">

<img width="360" alt="image" src="https://github.com/Traivius17/sportsstats/assets/114965842/35c060a3-98d6-4f84-81d2-d2d9b6ddb197">

<img width="360" alt="image" src="https://github.com/Traivius17/sportsstats/assets/114965842/d1eee46f-0985-4a27-ba86-ea8be0a545ea">

Functionalities:
•	News Section Access: Upon opening the website, users land on an attractive home page where they can easily access the news section on the left.
•	Header Navigation: The header features a navigation section with clear options for users to explore various sections of the website.
•	Footer Engagement: The footer contributes to the engaging home page, offering additional attractive elements.
•	Quiz Feature: Users can take an interactive quiz directly on the home page, adding an element of interactivity and entertainment.


3.5. Contact Us Page

User requirements: If a user has query feedback or requires information from the admin, they can use the Contact Us section to write a message to the admin with their email.

<img width="360" alt="image" src="https://github.com/Traivius17/sportsstats/assets/114965842/f12bc296-006f-4402-80c9-00f91727416a">

Functionalities:
•	Contact Us and Help Sections: Users can click on the Contact Us or Help section for support and assistance.
•	Query Submission: Within these sections, users can enter their name, email, and query to communicate with the admin.
•	User Confirmation: Upon submitting the query, users receive confirmation or feedback to ensure their message has been successfully sent.


### 3.6. Player Statistics

User Requirements: Users need a dedicated section where they can search for player names and access player statistics.

<img width="360" alt="image" src="https://github.com/Traivius17/sportsstats/assets/114965842/e9c783d6-d9fa-4d1f-9c3a-8bc9c394d958">

<img width="360" alt="image" src="https://github.com/Traivius17/sportsstats/assets/114965842/d91fea1e-a3ed-4e01-8d0f-9de7f989eed0">

Functionalities:
•	Top Search Bar: Users can enter a player's last name in the top search bar.
•	Dynamic Search Results: The search bar dynamically provides player names based on the last name entered by the user.
•	Player Selection: Users can select a specific player from the search results to access detailed player statistics.


### 3.7.Team Statistics

User Requirements: Users require a section where they can easily select and access information about different teams.

<img width="360" alt="image" src="https://github.com/Traivius17/sportsstats/assets/114965842/a5397014-37c9-4074-96e8-6a8701c18802">


Functionalities:
•	Team Selection Interface: A dedicated section enables users to select a team easily.
•	Dropdown or List: Users can choose a team from a dropdown menu or a list of available teams.
•	Team Information: Upon selecting a team, users can access comprehensive information, including player rosters, team statistics, and other relevant details.








