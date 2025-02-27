function customRender(reactElement, container) {
    // const domElement = document.createElement(reactElement.type);  // Step 1: React element ka type (yani 'a' tag) create karo

    // domElement.innerHTML = reactElement.children;  // Step 2: Link ke andar ka text set karo

    // domElement.setAttribute('href', reactElement.props.href);  // Step 3: href attribute set karo
    // domElement.setAttribute('target', reactElement.props.target); // Step 4: target attribute set karo

    // container.appendChild(domElement); // Step 5: Ye pura element #root div ke andar inject karo

    //!better code then above one

        // Step 1: Create an HTML element using the 'type' property of reactElement
        const domElement = document.createElement(reactElement.type);

        // Step 2: Set the inner text (children) of the element
        domElement.innerHTML = reactElement.children;
    
        // Step 3: Loop through all properties in the 'props' object and set them as attributes
        for (const prop in reactElement.props) {
            domElement.setAttribute(prop, reactElement.props[prop]);
        }
    
        // Step 4: Append the created element to the container (root div)
        container.appendChild(domElement);
}


// Defining a React-like object to render
const reactElement = {
    type: 'a',  // This defines the type of HTML element (anchor tag <a>)
    props: {
       href: 'https://google.com', // The link to open
       target: '_blank' // Opens the link in a new tab
    },
    children: 'Click me to visit Google' // The text inside the anchor tag
}

// Selecting the container where the element will be rendered
const mainContainer = document.querySelector('#root');

// Calling our custom render function to inject the element into the DOM
customRender(reactElement, mainContainer)

