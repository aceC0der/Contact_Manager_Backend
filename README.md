# 📇 Contact Management Backend

This is a simple backend API built using **Express.js** for managing contacts. It provides basic CRUD operations (Create, Read, Update, Delete) for managing contact data.

## 🚀 Features

- Add a new contact  
- Get all contacts  
- Get a single contact by ID  
- Update a contact  
- Delete a contact  

## 🛠️ Tech Stack

- Node.js  
- Express.js  
- dotenv for environment variables  
- nodemon for development  

## 📦 Installation

```bash
git clone https://github.com/your-username/contact-management-backend.git
cd contact-management-backend
npm install
```

## ⚙️ Configuration

```env
PORT=5000
```

## 🧪 Running the Server

```bash
npm run dev  # Starts the server with nodemon
```

The server will be running at `http://localhost:5000`.

## 📚 API Endpoints

| Method | Endpoint          | Description                |
|--------|-------------------|----------------------------|
| GET    | /api/contacts     | Get all contacts           |
| GET    | /api/contacts/:id | Get contact by ID          |
| POST   | /api/contacts     | Create a new contact       |
| PUT    | /api/contacts/:id | Update an existing contact |
| DELETE | /api/contacts/:id | Delete a contact           |

## 📁 Folder Structure

```
contact-management-backend/
│
├── controllers/
│   └── contactController.js
├── routes/
│   └── contactRoutes.js
├── models/
│   └── contactModel.js
├── .env
├── server.js
└── package.json
```

## 🧹 TODOs

- Add request validation  
- Implement authentication  
- Add pagination  
- Unit tests with Jest or Mocha  

## 📝 License

MIT License

---

Let me know if you'd like to add badges, example requests, or a Postman collection!