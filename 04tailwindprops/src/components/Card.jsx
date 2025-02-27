

function Card({title,description,image}) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-sm">

    <img className="w-full h-40 object-cover" src={image}  />

    <div className="p-4">
       <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
       <p className="text-gray-600 mt-2">{description}</p>
    </div>

    </div>
  )
}

export default Card