# React Router 6 Learning Guide: Emily's Trinkets
*A Step-by-Step Pedagogical Guide*

## 📚 Table of Contents
1. [Project Overview](#project-overview)
2. [Learning Objectives](#learning-objectives)
3. [Prerequisites](#prerequisites)
4. [Project Setup](#project-setup)
5. [Core Concepts Walkthrough](#core-concepts-walkthrough)
6. [Component Analysis](#component-analysis)
7. [Routing Architecture](#routing-architecture)
8. [Advanced Features](#advanced-features)
9. [Common Patterns & Best Practices](#common-patterns--best-practices)
10. [Exercises & Challenges](#exercises--challenges)
11. [Troubleshooting](#troubleshooting)
12. [Additional Resources](#additional-resources)

---

## 🎯 Project Overview

**Emily's Trinkets** is a React application that demonstrates React Router 6 concepts through a simulated e-commerce store. The project showcases:
- Client-side routing
- Nested routes
- Dynamic routing with parameters
- Navigation components
- Programmatic navigation

### Application Structure
```
Home Page → Shop Page → Individual Item Pages
                    ↳ Description/Shipping tabs
```

---

## 🎓 Learning Objectives

By the end of this guide, you will understand:

- [ ] How to set up React Router 6 in a React application
- [ ] Basic routing with `<Route>` and `<Routes>`
- [ ] Navigation using `<Link>` and `<NavLink>`
- [ ] Dynamic routing with URL parameters
- [ ] Nested routing concepts
- [ ] Programmatic navigation with `useNavigate`
- [ ] Route parameters with `useParams`
- [ ] Navigation state management

---

## ✅ Prerequisites

Before starting, ensure you have:
- Basic knowledge of React (components, hooks, props, state)
- Understanding of JavaScript ES6+ features
- Node.js and npm installed
- Familiarity with JSX syntax
- Basic understanding of HTML/CSS

---

## 🚀 Project Setup

### Step 1: Clone and Install
```bash
# Clone the repository
git clone [repository-url]
cd emilys-trinkets-react-router

# Install dependencies
npm install

# Start development server
npm run dev
```

### Step 2: Verify Installation
- Open `http://localhost:5173` in your browser
- You should see Emily's Trinkets homepage
- Navigation should work between Home and Shop

### Step 3: Explore the File Structure
```
src/
├── components/
│   ├── App.jsx          # Main app component with routing
│   ├── Home.jsx         # Homepage component
│   ├── ItemsList.jsx    # Shop/items list page
│   ├── Item.jsx         # Individual item page
│   └── ItemDetails.jsx  # Item description/shipping details
├── styles/
│   ├── index.less       # Main styles
│   └── variables.less   # Style variables
├── data.js              # Mock product data
└── index.jsx           # App entry point
```

---

## 🧠 Core Concepts Walkthrough

### 1. Router Setup (`src/index.jsx`)

```jsx
import { BrowserRouter } from "react-router-dom";
// ... other imports

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
```

**Key Learning Points:**
- `BrowserRouter` wraps the entire application
- Enables routing functionality throughout the component tree
- Uses HTML5 history API for clean URLs

### 2. Route Configuration (`src/components/App.jsx`)

```jsx
<Routes>
  <Route path="/items-list/:itemID/*" element={<Item items={stock} />} />
  <Route path="/items-list" element={<ItemsList items={stock} />} />
  <Route path="/" element={<Home />} />
</Routes>
```

**Key Learning Points:**
- `Routes` container holds all route definitions
- `Route` defines path-to-component mappings
- Routes are matched in order (most specific first)
- `:itemID` creates a dynamic parameter
- `/*` allows nested routing within the component

### 3. Navigation Links

```jsx
// Basic Link
<Link to="/">Home</Link>
<Link to="/items-list">Shop</Link>

// NavLink with active state
<NavLink to="description">Description</NavLink>
<NavLink to="shipping">Shipping</NavLink>
```

**Key Learning Points:**
- `Link` creates navigation without page refresh
- `NavLink` provides active state styling
- Relative vs absolute paths

---

## 🔍 Component Analysis

### 1. App Component (`src/components/App.jsx`)

**Purpose:** Main application wrapper with routing logic

**Key Features:**
- State management for product data
- Navigation bar with routing links
- Route definitions and nesting
- Data fetching simulation

**Learning Focus:**
- How to structure a routed application
- Passing data to routed components
- Creating a navigation layout

### 2. Home Component (`src/components/Home.jsx`)

**Purpose:** Landing page with call-to-action

**Key Features:**
- Programmatic navigation with `useNavigate`
- Button-triggered routing

```jsx
const navigate = useNavigate();
const routeToShop = () => {
    navigate("/items-list");
};
```

**Learning Focus:**
- Programmatic navigation patterns
- When to use `useNavigate` vs `Link`

### 3. ItemsList Component (`src/components/ItemsList.jsx`)

**Purpose:** Product catalog/shop page

**Key Features:**
- Dynamic link generation for each product
- Relative routing to individual items

```jsx
<Link to={`${item.id}`}>
    <img src={item.imageUrl} alt={item.name} />
    <p>{item.name}</p>
</Link>
```

**Learning Focus:**
- Creating dynamic navigation links
- Relative vs absolute routing paths

### 4. Item Component (`src/components/Item.jsx`)

**Purpose:** Individual product page with nested routing

**Key Features:**
- URL parameter extraction with `useParams`
- Nested routing for tabs (Description/Shipping)
- Error handling for missing items

```jsx
const { itemID } = useParams();
const item = items.find(item => item.id === parseInt(itemID));

// Nested routes
<Routes>
  <Route path="description" element={<ItemDetails text={item.description} />} />
  <Route path="shipping" element={<ItemDetails text={item.shipping} />} />
</Routes>
```

**Learning Focus:**
- URL parameter extraction and usage
- Nested routing implementation
- Error boundary patterns

---

## 🏗️ Routing Architecture

### Route Hierarchy
```
/ (Home)
├── /items-list (Shop)
│   └── /items-list/:itemID (Individual Item)
│       ├── /items-list/:itemID/description
│       └── /items-list/:itemID/shipping
```

### URL Parameter Flow
1. User clicks item in shop → `/items-list/123`
2. `useParams()` extracts `itemID: "123"`
3. Component finds matching item data
4. Renders item with nested navigation tabs

### Nested Routing Pattern
```jsx
// Parent Route (in App.jsx)
<Route path="/items-list/:itemID/*" element={<Item items={stock} />} />

// Child Routes (in Item.jsx)
<Routes>
  <Route path="description" element={<ItemDetails text={item.description} />} />
  <Route path="shipping" element={<ItemDetails text={item.shipping} />} />
</Routes>
```

---

## 🚀 Advanced Features

### 1. Error Handling
The application demonstrates several error handling patterns:

```jsx
// Redirect on empty data
if (!items.length) {
  navigate("/");
  return null;
}

// 404-style error for missing items
if (!item) {
  return <div>Item not found!</div>;
}
```

### 2. Active Navigation States
Using `NavLink` for tab navigation:

```jsx
<NavLink to="description">Description</NavLink>
```

Automatic active class application for current route.

### 3. Data Passing Through Routes
```jsx
<Route path="/items-list/:itemID/*" element={<Item items={stock} />} />
```

Props passed through the `element` prop reach the component.

---

## 📋 Common Patterns & Best Practices

### 1. Route Organization
- Place most specific routes first
- Use consistent naming conventions
- Group related routes together

### 2. Navigation Patterns
- Use `Link` for standard navigation
- Use `NavLink` when you need active states  
- Use `useNavigate` for programmatic navigation
- Prefer declarative (`Link`) over imperative (`navigate`) when possible

### 3. Parameter Handling
- Always validate URL parameters
- Handle missing or invalid parameters gracefully
- Consider type conversion (string to number)

### 4. Nested Routing
- Use `/*` in parent routes that contain child routes
- Keep child routes in their respective components
- Maintain consistent URL structure

### 5. Error Boundaries
- Handle missing data scenarios
- Provide fallback UI for broken routes
- Consider loading states for async data

---

## 💪 Exercises & Challenges

### Beginner Level

1. **Add a Contact Page**
   - Create a new `Contact.jsx` component
   - Add route configuration in `App.jsx`
   - Add navigation link in the header

2. **Modify Navigation**
   - Add active state styling to main navigation
   - Change `Link` components to `NavLink`

3. **Add Default Route**
   - Add a catch-all route for 404 errors
   - Create a `NotFound.jsx` component

### Intermediate Level

4. **Add Reviews Tab**
   - Extend the item page with a "Reviews" tab
   - Add mock review data to the data file
   - Implement nested routing for the reviews section

5. **Add Search Functionality**
   - Create a search page with URL parameters
   - Implement filtering based on search terms
   - Use `useSearchParams` hook

6. **Shopping Cart**
   - Add cart functionality with route-based state
   - Create a cart page accessible via routing
   - Implement add/remove item functionality

### Advanced Level

7. **Authentication Flow**
   - Add login/logout routes
   - Implement protected routes
   - Add redirect after login functionality

8. **Dynamic Categories**
   - Add category-based routing (`/items-list/category/:categoryName`)
   - Implement breadcrumb navigation
   - Add filtering by category

9. **Advanced URL State**
   - Implement sorting and filtering via URL parameters
   - Add pagination with URL state
   - Synchronize component state with URL

---

## 🔧 Troubleshooting

### Common Issues

**1. "Cannot read property of undefined"**
- Check if data is loaded before accessing properties
- Add loading states or null checks

**2. Routes not matching**
- Verify route order (most specific first)
- Check for typos in path definitions
- Ensure `/*` is used for nested routes

**3. Links not working**
- Verify `BrowserRouter` wraps the application
- Check if `to` props have correct paths
- Ensure components are inside the Router context

**4. Active states not working**
- Use `NavLink` instead of `Link`
- Check CSS class names (`.active` by default)
- Verify route paths match exactly

**5. Nested routes not rendering**
- Ensure parent route includes `/*`
- Check child route paths (relative vs absolute)
- Verify `Routes` component wraps child routes

### Debugging Tips

1. Use React Developer Tools to inspect component tree
2. Check browser URL matches expected route
3. Add `console.log` to track parameter values
4. Use Network tab to verify data loading

---

## 📚 Additional Resources

### Official Documentation
- [React Router Official Docs](https://reactrouter.com/)
- [React Router Tutorial](https://reactrouter.com/en/main/start/tutorial)

### Key Hooks Reference
- `useNavigate()` - Programmatic navigation
- `useParams()` - Access URL parameters
- `useLocation()` - Current location object
- `useSearchParams()` - Query string parameters

### Best Practices Articles
- [React Router 6 Migration Guide](https://reactrouter.com/upgrading/v5)
- [Nested Routes Patterns](https://ui.dev/react-router-nested-routes)

### Testing Resources
- [Testing React Router](https://testing-library.com/docs/example-react-router/)
- [React Router Testing Best Practices](https://kentcdodds.com/blog/testing-react-router)

---

## 🎉 Conclusion

This Emily's Trinkets project demonstrates essential React Router 6 concepts through a practical e-commerce example. By working through this guide, you've learned:

- Basic routing setup and configuration
- Dynamic routing with parameters
- Nested routing patterns
- Navigation components and programmatic navigation
- Error handling and best practices

Continue practicing by implementing the suggested exercises and exploring more advanced routing patterns in your own projects!

---

*Happy Learning! 🚀*