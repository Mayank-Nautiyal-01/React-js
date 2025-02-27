# Understanding State Batching in React

## Why Does Calling `setState` Multiple Times Not Always Update the State Immediately?

### **Concept of State Batching in React**
React batches multiple state updates for performance optimization. This means that when multiple `setState` calls occur within the same event handler, React may combine them into a **single update** instead of executing them one by one.

---

## **Example: Without Functional Update (Incorrect Approach)**
```jsx
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
```

### **Expected Output (if React updated immediately):**
If React executed `setCounter(counter + 1)` three times immediately, the counter should increase by **3** each time the button is clicked.

### **Actual Output:**
The counter only increases by **1** instead of 3.  

#### **Why?**
- Each `setCounter(counter + 1)` reads the **old value** of `counter` (which is **0** initially).
- Since React **batches** updates, it considers all three calls as **one update** and applies only the last one, which still sets `counter` to **1**.

---

## **Solution: Using Functional Updates (Correct Approach)**
To ensure each update is based on the latest state, use the **functional form** of `setState`:
```jsx
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
```

### **Now, clicking the button increases the counter by 3.**  
#### **Why?**
- Each `setCounter(prevCounter => prevCounter + 1)` ensures that the update **always** uses the latest state value.
- React batches these updates but applies them sequentially in the correct order.

---

## **Key Takeaways**
1. **React batches state updates** in event handlers for performance optimization.
2. **Using `setState(value)` directly may cause issues** when multiple updates happen because it refers to an outdated state.
3. **Using `setState(prevState => newValue)` ensures the correct value is used** and updates are applied sequentially.

---

### **Additional Notes**
- This behavior applies in React **inside event handlers** but not inside **Promises, `setTimeout`, or async functions**, where updates happen immediately.


