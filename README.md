# PassMan - Your Own Password Manager

A simple and efficient password manager built with the **MERN stack**. PassMan allows users to securely store and manage their credentials in one place through an intuitive and responsive interface.

## Features

* Save passwords
* Edit existing passwords
* Delete saved passwords
* Copy passwords to the clipboard
* Show or hide passwords while typing
* Store website URLs
* Store usernames or email addresses
* Responsive and user-friendly interface
* Real-time data storage using MongoDB

---

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB

### Testing

* Postman (for API testing)

---

## Data Structure

Each password entry contains the following fields:

```json
{
  "site": "https://example.com",
  "username": "example@email.com",
  "password": "your-password"
}
```

---

## API Endpoints

| Method | Endpoint | Description                  |
| ------ | -------- | ---------------------------- |
| GET    | `/`      | Retrieve all saved passwords |
| POST   | `/`      | Save a new password          |
| PUT    | `/`      | Update an existing password  |
| DELETE | `/`      | Delete a password            |

---

## Environment Variables

Create a `.env` file inside the backend directory and add the required environment variables.

```env
MONGODB_URI=your_mongodb_connection_string
PORT=your_port_number
```

---

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate to the project directory

```bash
cd PassMan
```

### 3. Install frontend dependencies

```bash
npm install
```

### 4. Install backend dependencies

```bash
cd backend
npm install
```

### 5. Configure environment variables

Create a `.env` file and add the required variables.

```env
MONGODB_URI=
PORT=
```

### 6. Start the backend server

```bash
node --watch server.js
```

### 7. Start the frontend application

Open a new terminal and run:

```bash
npm run dev
```

---

## Project Structure

```text
PassMan
├── backend
│   ├── server.js
│   ├── .env
│   └── ...
├── public
├── src
├── package.json
├── vite.config.js
└── README.md
```

---

## Screenshots/Video


Home Page


https://github.com/user-attachments/assets/29756254-0f02-49fd-bbcb-bd3418a49f56
<img width="1675" height="870" alt="website" src="https://github.com/user-attachments/assets/2caff7ba-3a8e-47ba-85dd-3df5c35ddb63" />


---

## Future Improvements

* User authentication
* Password generation
* Password strength indicator
* Search and filtering
* Password categorization
* Encrypted password storage

---

Author

Syed Abdullah

GitHub: @Abdullah_6203

Built with React, Vite, Tailwind CSS, Express.js, Node.js, and MongoDB.
