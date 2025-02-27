

# **Custom React Renderer**  

This project demonstrates how to create a **custom rendering function** similar to React. Instead of using React or any framework, this implementation manually **creates, configures, and injects** elements into the DOM based on a JavaScript object.  

## **Project Overview**  
- The project simulates how React works internally by creating a **virtual element representation** and rendering it inside the DOM.  
- Instead of `ReactDOM.render()`, we use a **customRender()** function to process an object and dynamically generate an HTML element.  

## **How It Works**  
1. A JavaScript object defines an element with:  
   - `type`: The type of element (e.g., `'a'` for a hyperlink).  
   - `props`: Attributes such as `href` and `target`.  
   - `children`: The inner text of the element.  
2. The `customRender()` function:  
   - Creates an HTML element using `document.createElement()`.  
   - Assigns properties dynamically using a loop.  
   - Appends the element to the container (i.e., `#root`).  



## **Code Implementation**  

### **1. HTML File (`index.html`)**  
The HTML file contains a **root div (`#root`)** where the dynamically created element will be injected.  
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom React Renderer</title>
</head>
<body>
    <div id="root"></div>  <!-- Container where the element will be rendered -->
    <script src="customReact.js"></script>
</body>
</html>
```

### **2. JavaScript File (`customReact.js`)**  
This file defines the `customRender()` function, which mimics React’s rendering behavior.  
```javascript
function customRender(reactElement, container) {
    // Step 1: Create an HTML element based on 'type' property
    const domElement = document.createElement(reactElement.type);

    // Step 2: Set inner text (children) for the element
    domElement.innerHTML = reactElement.children;

    // Step 3: Loop through properties (props) and set attributes
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    // Step 4: Append the element inside the container (#root)
    container.appendChild(domElement);
}

// React-like object representing an element
const reactElement = {
    type: 'a',  
    props: {
       href: 'https://google.com', // Link to be opened
       target: '_blank'  // Opens in a new tab
    },
    children: 'Click me to visit Google' // Text inside the anchor tag
}

// Select the root container and render the element
const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);
```

