# Tailwind CSS and Props in React

## Introduction
This project demonstrates how to use **Tailwind CSS** for styling and **props** to pass data dynamically in a React component. We will create a **Card component** that accepts `title`, `description`, and `image` as props.

To install the **Tailwind CSS** in your project:
follow the step given in tailwind docs:
https://tailwindcss.com/docs/installation/using-vite

## Component Code

### **📄 App.jsx**
```jsx
import Card from "./components/Card";

function App() {
  const cards = [
    {
      title: "HTML",
      description: "Hypertext Markup Language is the standard markup language.",
      image: "https://i.pinimg.com/474x/b0/66/6a/b0666a70fca13eb27551fe81fd054d26.jpg"
    },
    {
      title: "CSS",
      description: "Cascading Style Sheets is used for styling a document.",
      image: "https://i.pinimg.com/474x/fc/da/ff/fcdaff4d3f30005e462d0d3c31cfb691.jpg"
    },
    {
      title: "JavaScript",
      description: "JavaScript is a programming language used for dynamic web content.",
      image: "https://i.pinimg.com/736x/5f/00/ec/5f00ec6e90e1c6c7368638f3995d9000.jpg"
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 gap-6 flex-wrap">
      {cards.map((data, index) => (
        <Card key={index} {...data} />
      ))}
    </div>
  );
}

export default App;
```

### **📄 Card.jsx**
```jsx
function Card({ title, description, image }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-sm">
      <img className="w-full h-40 object-cover rounded-lg" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
}

export default Card;
```

---

