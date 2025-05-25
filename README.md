# DILKUSH 🍽️

DILKUSH is a full-stack food delivery web application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to browse a variety of dishes, place orders, and make payments through Stripe integration.

---

## 🚀 Features

- 🍱 Browse food categories and top dishes
- 🛒 Add/remove items from cart
- 🔒 User authentication with JWT
- 📦 Order management and order history
- 💳 Stripe payment gateway integration
- 📷 File/image upload support (via Multer)
- 🔄 Responsive UI and smooth user experience

---

##  Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT (jsonwebtoken)
- Bcrypt.js (password hashing)
- Stripe API (payments)
- Multer (file upload)
- Dotenv (environment variables)

---

## 📂 Project Structure

```
DILKUSH/
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── uploads/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── App.jsx
│   │   └── index.js
├── .env
├── package.json
└── README.md
```

---

## 🔧 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/priyabarman2024/DILKUSH.git
cd DILKUSH
```

### 2. Setup Backend
```bash
cd backend
npm install
npm run server
```
Create a `.env` file in `/backend`:
```env
PORT=4000
MONGO_URL=your_mongodb_connection
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key
```

### 3. Setup Frontend
```bash
cd frontend
npm install
npm run dev
```

---

## 📦 API Endpoints (Backend)
- `POST /api/cart/add` – Add to cart
- `POST /api/cart/remove` – Remove from cart
- `POST /api/cart/get` – Get user's cart
- `GET /api/food/list` – Get all food items
- `POST /api/order/place` – Place an order

---

---

## 🙌 Acknowledgments
Created by [Priya Barman](https://github.com/priyabarman2024)

---

## 📃 License
This project is licensed under the MIT License.
