# CampusHub Backend 🎓

A comprehensive backend API designed for educational institutions to manage courses, announcements, results, and learning materials. Built with Node.js, Express, and MongoDB, it facilitates seamless interaction between students, faculty, and administrators.

<p align="center">
  <a href="#-key-features">Key Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-installation--setup">Installation</a> •
  <a href="#-api-endpoints">API Endpoints</a> •
  <a href="#-contributing">Contributing</a>
</p>

---

<div id="-key-features">

## 🚀 Key Features

-   **Role-Based Access Control (RBAC)**:
    -   Distinct roles for **Admin**, **Faculty**, and **Student**.
    -   Secure authentication via Email/Password and OAuth (Google, GitHub).
-   **Course Management**:
    -   Admins can create and manage courses.
    -   Faculty can upload and manage course materials.
-   **Academic Updates**:
    -   **Announcements**: Centralized system for campus-wide or course-specific news.
    -   **Results**: Faculty can publish results, and students can view their performance.
-   **Security**:
    -   JWT-based stateless authentication.
    -   Rate limiting to prevent abuse.
    -   Secure headers and CORS configuration.

</div>

<div id="-tech-stack">

## 🛠️ Tech Stack

-   **Runtime**: [Node.js](https://nodejs.org/)
-   **Framework**: [Express.js](https://expressjs.com/)
-   **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
-   **Authentication**: [Passport.js](https://www.passportjs.org/), JWT, Bcrypt
-   **File Storage**: [Cloudinary](https://cloudinary.com/) (for course materials)
-   **Email Service**: [Nodemailer](https://nodemailer.com/) with [Mailgen](https://github.com/eladnava/mailgen)
-   **Validation**: [Zod](https://zod.dev/)
-   **Logging**: [Winston](https://github.com/winstonjs/winston), [Morgan](https://github.com/expressjs/morgan)

</div>

<div id="-project-structure">

## 📂 Project Structure

```
campushub/
├── src/
│   ├── app.js           # Express app setup and middleware
│   ├── index.js         # Server entry point
│   ├── constants.js     # Enums (UserRoles, etc.)
│   ├── controllers/     # Logic for Auth, Courses, Results, Announcements
│   ├── middlewares/     # Auth verification, Error handling, Multer
│   ├── models/          # DB Schemas (User, Course, Material, Result, Announcement)
│   ├── routes/          # API Route definitions
│   ├── utils/           # Helper utilities (ApiError, ApiResponse)
│   ├── validators/      # Input validation schemas
│   ├── logger/          # Logger setup
│   └── passport/        # OAuth strategies
├── public/              # Static files
├── .env.sample          # Environment config template
└── package.json         # Project dependencies
```

</div>

<div id="-installation--setup">

## ⚙️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/arush73/campushub.git
    cd campushub
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory based on `.env.sample`.
    ```env
    PORT=8080
    MONGODB_URI=mongodb://localhost:27017/campushub
    NODE_ENV=development
    
    # Auth Secrets
    ACCESS_TOKEN_SECRET=<your_secret>
    ACCESS_TOKEN_EXPIRY=1d
    REFRESH_TOKEN_SECRET=<your_secret>
    REFRESH_TOKEN_EXPIRY=10d
    EXPRESS_SESSION_SECRET=<your_secret>
    
    # Cloudinary
    CLOUDINARY_CLOUD_NAME=<your_cloud_name>
    CLOUDINARY_API_KEY=<your_api_key>
    CLOUDINARY_API_SECRET=<your_api_secret>
    
    # OAuth
    GOOGLE_CLIENT_ID=<your_id>
    GOOGLE_CLIENT_SECRET=<your_secret>
    GOOGLE_CALLBACK_URL=http://localhost:8080/api/v1/auth/google/callback
    
    GITHUB_CLIENT_ID=<your_id>
    GITHUB_CLIENT_SECRET=<your_secret>
    GITHUB_CALLBACK_URL=http://localhost:8080/api/v1/auth/github/callback
    ```

4.  **Start the Server:**
    ```bash
    # Development
    npm run dev
    
    # Production
    npm start
    ```

</div>

<div id="-api-endpoints">

## 📡 API Endpoints

### Authentication (`/api/v1/auth`)
-   `POST /register`: Register a new user.
-   `POST /login`: Login.
-   `POST /logout`: Logout.
-   `POST /refresh-token`: Refresh access token.
-   `GET /google`, `/github`: OAuth login.

### Announcements (`/api/v1/announcements`)
-   `GET /`: Get all announcements.
-   `POST /`: Create an announcement (Admin/Faculty only).

### Courses (`/api/v1/courses`)
-   `GET /`: List all courses.
-   `POST /`: Add a new course (Admin only).
-   `GET /:courseId/materials`: Get materials for a course.
-   `POST /:courseId/materials`: Upload material (Admin/Faculty only).

### Results (`/api/v1/results`)
-   `POST /`: Publish a result.
-   `GET /:courseId`: View results for a specific course.

### Health Check (`/api/v1/healthcheck`)
-   `GET /`: Check server status.

</div>

<div id="-contributing">

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

</div>

## 📄 License

This project is licensed under the ISC License.
