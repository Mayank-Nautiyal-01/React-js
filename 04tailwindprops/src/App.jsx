import Card from "./components/card"
function App() {
  const cards=[
    {
      title:"HTML",
      description:"Hypertext Markup Language is the standard markup language",
      image:"https://i.pinimg.com/474x/b0/66/6a/b0666a70fca13eb27551fe81fd054d26.jpg"

    },
    {
      title:"CSS",
      description:"Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document ",
      image:"https://i.pinimg.com/474x/fc/da/ff/fcdaff4d3f30005e462d0d3c31cfb691.jpg"
    },
    {
      title:"Javascript",
      description:"JavaScript is a programming language used to create dynamic content for websites.",
      image:"https://i.pinimg.com/736x/5f/00/ec/5f00ec6e90e1c6c7368638f3995d9000.jpg"
    },
  ];
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 gap-6 flex-wrap">
     
      {cards.map((data,index)=>(
        <Card key={index} {...data}/>
      ))}
    </div>
  )
}

export default App