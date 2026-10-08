<div align="center">

# 🛒 GreenBasketry

### A full-stack online grocery shopping platform

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express_5-339933?logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-Checkout-635BFF?logo=stripe&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)


</div>

## 📖 About

GreenBasketry is a MERN-stack e-commerce app for buying groceries online. Customers browse products, fill a cart and pay with **Stripe** or **Cash on Delivery**. Store admins manage products and move orders through the fulfilment pipeline from a separate panel.

| App | Purpose | URL |
|---|---|---|
| 🛍️ Storefront | Customer shop (React, Vite, Tailwind) | `localhost:5173` |
| 🧑‍💼 Admin Panel | Products and orders (React, Vite, Tailwind) | `localhost:5174` |
| ⚙️ Backend API | Auth, payments, data (Node, Express, MongoDB) | `localhost:4000` |

## ✨ Features

**Customers**
- Sign up and log in 
- Browse products by category: Fruits, Vegetables, Dairy, Beverages, Snacks, Seafood, Bakery, Meat
- Cart saved per user in the database
- Pay online with Stripe Checkout or choose Cash on Delivery
- Order history with live order and payment status
- Contact page with an enquiry form

**Admin**
- Add products with image upload, and delete them
- View all orders with customer details, items and totals
- Update order status: Pending → Processing → Shipped → Delivered (or Cancelled)
- Filter orders by status, with summary cards

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


## 📸 Screenshots

### 🛍️ Storefront
| Home | Contact |
|---|---|
| <img src="screenshots/storefront/01-home.png" width="100%"> | <img src="screenshots/storefront/05-contact.png" width="100%"> |

| Sign Up | Login |
|---|---|
| <img src="screenshots/storefront/03-signup.png" width="100%"> | <img src="screenshots/storefront/04-login.png" width="100%"> |

| Cart | Checkout | My Orders |
|---|---|---|
| <img src="screenshots/storefront/06-cart.png" width="100%"> | <img src="screenshots/storefront/07-checkout.png" width="100%"> | <img src="screenshots/storefront/08-my-orders.png" width="100%"> |

### 💳 Stripe Payment
| Stripe Checkout | Payment Success |
|---|---|
| <img src="screenshots/stripe/01-stripe-checkout.png" width="100%"> | <img src="screenshots/stripe/02-payment-success.png" width="100%"> |

### 🧑‍💼 Admin Panel
| Add Product | Listed Items |
|---|---|
| <img src="screenshots/admin/01-add-item.png" width="100%"> | <img src="screenshots/admin/02-list-items.png" width="100%"> |

| Orders | Updating Order Status |
|---|---|
| <img src="screenshots/admin/03-orders.png" width="100%"> | <img src="screenshots/admin/04-update-status.png" width="100%"> |


## 🚀 Getting Started

**Prerequisites:** [Node.js](https://nodejs.org/) LTS, a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster, a [Stripe](https://stripe.com/) account (test mode).

```bash
git clone https://github.com/NainaBhat/Greenbasketry.git
cd Greenbasketry
```

**1. Backend**
```bash
cd backend
npm install
```
Create an empty `uploads` folder inside `backend`, then add `backend/.env`:
```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_long_random_secret
STRIPE_SECRET_KEY=sk_test_your_stripe_key
FRONTEND_URL=http://localhost:5173
```
```bash
npm start
```

**2. Storefront** (new terminal)
```bash
cd frontend
npm install
npm run dev
```

**3. Admin panel** (new terminal, start after the storefront)
```bash
cd admin
npm install
npm run dev
```

Open `http://localhost:5173` (shop) and `http://localhost:5174` (admin). The database starts empty, so add a few products from the admin panel first.

**Test payment:** card `4242 4242 4242 4242`, any future expiry, any 3-digit CVC. No real money is charged.

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
- Cloud deployment (Render and Vercel)

<div align="center">

</div>
