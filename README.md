# 🎨 ECommerce Theme-Based React App

This is a theme-switchable React + TypeScript eCommerce-style UI built with **Styled-components**, **React Router**, and **Context API**. It demonstrates responsive design, API integration, and dynamic theming.

---

## 📌 Features

### 🧭 Header
- Fixed top header with app logo/name.
- Theme switcher dropdown to toggle between three themes.

### 🎨 Themes
#### Theme 1 - Minimal (Light)
- Light background, clean layout
- Simple sans-serif font

#### Theme 2 - Dark + Sidebar
- Dark mode UI with a fixed sidebar for navigation
- Bold serif font and high contrast visuals

#### Theme 3 - Colorful Cards
- Vibrant, gradient background
- Card-based grid layout
- Playful font (`Pacifico` or similar Google font)

### 📦 Main Content
- Dynamic product list (fetched from [Fake Store API](https://fakestoreapi.com/products))
- Title, description, CTA button
- Fully responsive card layout

### ⚙️ Functionality
- Theme persists across reloads using `localStorage`
- Theme management via `React Context API`
- Product data fetched using custom hook and Axios
- Page routing: `Home`, `About`, `Contact` via `React Router`
- Styled-components used for consistent theming and responsiveness
- Smooth animated transitions during theme switching
- Built entirely in **TypeScript**
- Hosted via GitHub Pages

---

## 🚀 Deployment

The app is live at:  
👉 [https://abhishek-m06.github.io/Assignment_app/](https://abhishek-m06.github.io/Assignment_app/)

To run locally:

```bash
# Clone the repo
git clone https://github.com/Abhishek-m06/Assignment_app.git

# Install dependencies
cd Ecommers_Theme
npm install

# Run dev server
npm run dev
