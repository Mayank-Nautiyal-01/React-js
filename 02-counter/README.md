

# React Counter App  

This is a simple **Counter App** built using **React** that demonstrates the use of the **useState Hook** for managing state in a functional component.  

## 🛠️ Technologies Used  
- **React**: JavaScript library for building UI  
- **useState Hook**: To manage and update the counter state  
- **JSX**: Used for rendering UI elements  
- **Event Handling**: Used for handling button clicks  

## 📌 Features  
- **Increase Counter**: Click the "Add value" button to increment the counter (Max: 20)  
- **Decrease Counter**: Click the "Remove value" button to decrement the counter (Min: 0)  

## 📜 Explanation  
### **1️⃣ State Management (`useState`)**  
- `useState(0)` initializes `counter` with a default value of **0**  
- `setCounter` updates the counter whenever a button is clicked  

### **2️⃣ Event Handling (`onClick`)**  
- `addValue()` → Increases the counter by **1**, but only if it's **less than 20**  
- `removeValue()` → Decreases the counter by **1**, but only if it's **greater than 0**  

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
# 📌 **React Counter App - Code Explanation**  :::::

This project is a simple **React Counter App** that demonstrates **state management using the `useState` hook`** and **event handling** in React.  

---

## 📝 **Code Breakdown**  

### **1️⃣ Importing Dependencies**  
```jsx
import './App.css'  // Importing CSS file for styling
import { useState } from 'react'  // Importing useState hook from React
```
- `useState` is imported because we need to manage a changing value (counter).  

---

### **2️⃣ Defining the Functional Component**  
```jsx
function App() { 
```
- React components are just **JavaScript functions** that return UI elements.  
- This component (`App`) is the main **functional component** of our app.  

---

### **3️⃣ Using the `useState` Hook**  
```jsx
const [counter, setCounter] = useState(0);
```
- **`counter`**: Holds the current value of the counter (initially **0**).  
- **`setCounter`**: Function that updates the counter value whenever needed.  
- The default state is set as `0` (`useState(0)`).  

---

### **4️⃣ Handling Button Clicks (Event Handling)**  
#### **🔺 Increase Counter**
```jsx
const addValue = () => {
    if(counter < 20)  // Condition to prevent counter from going beyond 20
        setCounter(counter + 1);
}
```
- This function **increments** the counter value by **1**.  
- It **checks if the counter is less than 20** before increasing it.  

#### **🔻 Decrease Counter**
```jsx
const removeValue = () => {
    if(counter > 0)  // Condition to prevent counter from going below 0
        setCounter(counter - 1);
}
```
- This function **decrements** the counter value by **1**.  
- It **checks if the counter is greater than 0** before decreasing it.  

---

### **5️⃣ JSX (Returning UI Elements)**  
```jsx
return (
    <>
      <h1>React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>Remove value</button>
    </>
)
```
- The **current counter value** is displayed inside the `<h2>` tag.  
- Two buttons:
  - **"Add value"** → Calls `addValue()` function when clicked.  
  - **"Remove value"** → Calls `removeValue()` function when clicked.  
- `onClick` is an event handler that triggers functions when the button is clicked.  

---

### **6️⃣ Exporting the Component**  
```jsx
export default App;
```
- This allows the `App` component to be used in other files (like `main.jsx`).  

---

## 🔥 **Summary of Concepts Used**  
1. **React Functional Components** – The entire app is inside a function (`App`).  
2. **useState Hook** – Manages the counter state dynamically.  
3. **Event Handling (`onClick`)** – Handles button clicks.  
4. **Conditional Rendering** – Prevents counter from exceeding 20 or going below 0.  
5. **JSX Syntax** – Mixing HTML with JavaScript inside the return statement.  

---

## 🚀 **How It Works**  
1. The **initial counter value is 0**.  
2. Clicking **"Add value"** increases the counter (Max: 20).  
3. Clicking **"Remove value"** decreases the counter (Min: 0).  
4. The updated value is immediately reflected on the screen.  

---

This explanation ensures **clarity in understanding the code** and the **React concepts used**! 🚀