<div align="center">

# 🛒 GreenBasketry

### A full-stack online grocery shopping platform

Browse fresh groceries, fill your cart and pay securely online, with a separate admin panel to manage products and orders.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white)
![Stripe](https://img.shields.io/badge/Payments-Stripe-635BFF?logo=stripe&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?logo=tailwindcss&logoColor=white)

</div>

---

## 📖 About

**GreenBasketry** is an e-commerce web application for buying groceries online. It is made up of three parts: a customer-facing **storefront**, a **REST API** backend, and an **admin dashboard**. Customers can browse products, manage a cart and check out with Stripe. Admins can manage the product catalogue and track orders.

## ✨ Features

### 🛍️ Customer Storefront
- User registration and login with JWT authentication
- Browse products by category with a clean, responsive layout
- Add, update and remove items in the cart (cart saved per user)
- Secure checkout powered by **Stripe**
- Order history and payment verification
- Contact page

### 🧑‍💼 Admin Panel
- Add new products with image upload
- View and delete existing products
- View all customer orders and update their status
- Dashboard charts for quick insights

## 🧰 Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | React 19, Vite, Tailwind CSS |
| **Admin** | React 19, Vite, Tailwind CSS 4|
| **Backend** | Node.js, Express 5, JWT|
| **Database** | MongoDB Atlas with Mongoose |
| **Payments** | Stripe Checkout |

## 📁 Project Structure

```
GreenBasketry/
├── frontend/     # Customer storefront (React + Vite)   → http://localhost:5173
├── admin/        # Admin dashboard (React + Vite)       → http://localhost:5174
└── backend/      # REST API (Express + MongoDB)         → http://localhost:4000
    ├── config/       # Database connection
    ├── controllers/  # Business logic
    ├── middleware/   # Auth middleware
    ├── models/       # Mongoose schemas
    ├── routes/       # API routes
    └── uploads/      # Product images
```

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS)
- A free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster
- A [Stripe](https://stripe.com/) account (test mode)

### 1. Clone the repository
```bash
git clone https://github.com/YOUR-USERNAME/greenbasketry.git
cd greenbasketry
```

### 2. Set up the backend
```bash
cd backend
npm install
```
Create a `uploads` folder inside `backend`, then create a `.env` file:
```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=sk_test_your_stripe_key
FRONTEND_URL=http://localhost:5173
```
Start the server:
```bash
npm start
```

### 3. Run the storefront
```bash
cd frontend
npm install
npm run dev
```

### 4. Run the admin panel
```bash
cd admin
npm install
npm run dev
```

### 5. Open the apps
| App | URL |
|-----|-----|
| Storefront | http://localhost:5173 |
| Admin Panel | http://localhost:5174 |
| API | http://localhost:4000 |

> 💳 **Test payment:** use card `4242 4242 4242 4242` with any future expiry date and any CVC.

## 🔌 API Overview

| Route | Purpose |
|-------|---------|
| `/api/user` | Register and login |
| `/api/items` | Product management |
| `/api/cart` | Cart operations (protected) |
| `/api/orders` | Place and manage orders, payment confirmation |

## 🔮 Future Improvements
- Product search and filters
- Delivery tracking and notifications
- Admin authentication and roles
- Deployment on Render / Vercel

## 📸 Screenshots

*Add screenshots of the home page, cart, checkout and admin panel here.*

---

<div align="center">


</div>
