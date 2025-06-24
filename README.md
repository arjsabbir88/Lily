# 🎁A BookHouse Subscription Box Service Platform

A personalized subscription box service platform built with React, Firebase, and Node.js. Users can browse, subscribe, and review different monthly box services based on their preferences.

🔴 [Live Site](https://arjbookhouse.netlify.app/)
🔵 [Client Repo](https://github.com/arjsabbir88/Lily)

---

## 🔥 Key Features

- 🔐 **Authentication**: Email/Password + Google Login via Firebase Auth.
- 🧠 **Forget Password**: Reset password by email (without email verification).
- 📦 **Subscription Service**: JSON-based dynamic cards and service detail pages.
- ✅ **Protected Routes**: My Profile & Subscription Details require login.
- 💬 **User Reviews**: Add & view reviews per subscription service.
- ⚙️ **Update Profile**: Firebase `updateProfile()` to update name & photo.
- 🕵️‍♂️ **Password Rules**: Uppercase, lowercase, and min 6 characters.
- 🧭 **Dynamic Title**: Each route sets its own document title.
- 🎯 **404 Page**: Catch-all not found route.
- 🎨 **Responsive Design**: Fully responsive across all devices.
- 🔄 **Persisted Login State**: Uses Firebase `onAuthStateChanged`.
- 👁️ **Show/Hide Password**: Toggle password visibility on registration.
- ✨ **AOS Animation**: Animates homepage cards & sections.
- 🧪 **Extra Private Route**: Bonus route with relevant content (e.g., "My Orders").

---

## 📂 Project Structure

BookHouse-subscription-box/
│
├── client/ → React app
│ ├── components/
│ ├── pages/
│ ├── routes/
│ ├── hooks/
│ ├── App.jsx
│ └── main.jsx
│
├── server/ → Node.js + Express (if applicable)
│
└── README.md


## 🔐 Environment Variables

Store all sensitive data in a `.env` file (not pushed to GitHub):




---

## 🧩 Tech Stack

- **Frontend**: React, React Router DOM, DaisyUI, TailwindCSS
- **Backend**: Node.js (Optional for additional features)
- **Auth**: Firebase Authentication
- **Hosting**: Netlify (Frontend) + Firebase (optional)
- **Package Used**:
- firebase
- react-router-dom
- aos (Animate on Scroll)
- react-icons`
- sweetalert2 / react-toastify (for messages)

---

## 📝 JSON Sample for Services

```json
{
  "id": "1",
  "name": "Tech Lover Box",
  "category": "Technology",
  "price": "$29.99",
  "frequency": "Monthly",
  "thumbnail": "https://i.ibb.co/your-image.jpg"
}


# My Project

## Screenshot

![Home Page](https://i.ibb.co/jZVfZxh5/arjbookhouse-netlify-app.png))

![Profile Page](https://i.ibb.co/xKXjQCCS/arjbookhouse-netlify-app-3.png)

