# React E-commerce Demo

A modern e-commerce demo application built with React, Vite, and Tailwind CSS. It features a responsive product catalog, category filtering, and a fully functional shopping cart using React Context.

## Features

- Browse a catalog of products with images, prices, and ratings
- Filter products by category in real-time
- View detailed product information and reviews
- Add, update, and remove items from the shopping cart
- Responsive design for desktop and mobile

## Technologies Used

- React
- Vite
- Tailwind CSS
- JavaScript (ES6+)
- React Router

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/whatbyte.git
   cd whatbyte
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```
   or
   ```sh
   yarn
   ```

3. **Set up Tailwind CSS (if not already set up):**
   ```sh
   npx tailwindcss init
   ```
   Make sure your `tailwind.config.js` and CSS files are configured as shown in the project.

### Running the Project

Start the development server:

```sh
npm run dev
```
or
```sh
yarn dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

### Building for Production

To build the app for production:

```sh
npm run build
```
or
```sh
yarn build
```

## Folder Structure

```
src/
  Components/
    CartPage.jsx
    MainLayout.jsx
    Navbar.jsx
    ProductDetailPage.jsx
    ProductGrid.jsx
    Sidebar.jsx
    Footer.jsx
    dummyProducts.jsx
  Context/
    AppContext.jsx
  App.jsx
  index.jsx
  index.css
```

## Screenshots

![Product Listing](./screenshots/product-listing.png)
![Cart Page](./screenshots/cart-page.png)

## License

This project is for demonstration and educational purposes.

---

**Made with ❤️ using React and Tailwind
