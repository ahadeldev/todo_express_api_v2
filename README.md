# **Express Todos API**

A simple and professional Todos API built using **Express.js** and **Sequelize**, with a **MariaDB** database backend. This project demonstrates the fundamentals of building a RESTful API, including CRUD operations and database integration, following a clean and modular structure.

---

## **Features**

- **CRUD Operations:**
  - Create a new todo.
  - Read all todos or a single todo.
  - Update a todo.
  - Delete a todo.
- **Sequelize ORM** for database interaction.
- **Environment Variables** for configuration (`dotenv`).
- Modular project structure for scalability and maintainability.

---

## **Getting Started**

### **1. Prerequisites**
Ensure you have the following installed:
- **Node.js** (v14 or later)
- **MariaDB** (via XAMPP or standalone)
- **npm** (comes with Node.js)

---

### **2. Clone the Repository**
```bash
git clone https://github.com/your-username/express-todos-api.git
cd express-todos-api
```

---

### **3. Install Dependencies**
```bash
npm install
```

---

### **4. Set Up the Database**
1. Log in to your MariaDB server:
   ```bash
   mysql -u root -p
   ```
2. Run the following SQL commands:
   ```sql
   CREATE DATABASE todos_db;
   CREATE USER 'todo_user'@'localhost' IDENTIFIED BY 'todo_pass';
   GRANT ALL PRIVILEGES ON todos_db.* TO 'todo_user'@'localhost';
   FLUSH PRIVILEGES;
   ```
3. Use the provided `schema.sql` file to create the `todos` table:
   ```bash
   mysql -u todo_user -p todos_db < schema/schema.sql
   ```

---

### **5. Configure Environment Variables**
Create a `.env` file in the project root:
```env
DB_HOST=localhost
DB_USER=todo_user
DB_PASSWORD=todo_pass
DB_NAME=todos_db
DB_DIALECT=mariadb
PORT=5000
```

---

### **6. Start the Server**
```bash
npm start
```

---

### **7. API Endpoints**

#### **1. Create a Todo**
- **Method:** `POST`
- **Endpoint:** `/api/v2/todos/`
- **Request Body:**
  ```json
  {
    "title": "Sample Todo",
    "description": "This is a sample description",
    "completed": false
  }
  ```
- **Response:** Returns the created todo.

#### **2. Get All Todos**
- **Method:** `GET`
- **Endpoint:** `/api/v2/todos/`
- **Response:** Returns a list of todos.

#### **3. Get a Single Todo**
- **Method:** `GET`
- **Endpoint:** `/api/v2/todos/:id`
- **Response:** Returns the todo with the specified ID.

#### **4. Update a Todo**
- **Method:** `PUT`
- **Endpoint:** `/api/v2/todos/:id`
- **Request Body:**
  ```json
  {
    "title": "Updated Title",
    "description": "Updated description",
    "completed": true
  }
  ```
- **Response:** Returns the updated todo.

#### **5. Delete a Todo**
- **Method:** `DELETE`
- **Endpoint:** `/api/v2/todos/:id`
- **Response:** Confirms deletion.

---

## **Project Structure**
```
express-todos-api/
│
├── config/
│   └── db.config.js           # Database connection
│
├── middlewares/
│   ├── errorhandler.js        # Centralized error handling
│   ├── logger.js              # Request/response logger
│   └── notfound.js            # 404 handler
│
├── models/
│   └── todo.model.js          # Sequelize model definition
│
├── routes/
│   └── todo.routes.js         # API routes
│
├── schema/
│   └── schema.sql             # SQL script to create the database schema
│
├── services/
│   └── todo.services.js       # Business logic for Todos
│
├── shared/
│   ├── apperror.js            # Custom error class
│   └── httpstatuscodes.js     # HTTP status codes
│
├── .env                       # Environment variables (ignored by Git)
├── .gitignore                 # Ignored files
├── package.json               # Project metadata and dependencies
├── package-lock.json          # Dependency lock file
└── server.js                  # Entry point for the application
```

---

## **Planned Enhancements**
- Add a `controllers/` directory for separating request-handling logic.
- Implement unit and integration tests.
- Introduce API versioning (`/api/v1/todos`).
- Add pagination, filtering, and sorting for the `GET /api/todos` endpoint.

---

Feel free to upload this `README.md` to your repository and make adjustments based on your personal style or additional project features!