import { useState } from "react"

const AnotherList = () => {
  let cars = [
  {
    id:1,
    name:'Volkswagen Polo',
  },
  {
    id:2,
    name:'Porsche 911'
  }, 
  {
    id:3,
    name:'Mc Laren Senna'
  }

  ];

  const [newCars, setNewCars] = useState(cars);
  const handleNewCars = (id) => {
    setNewCars(
      newCars.filter((car) => {
        return car.id !== id;
      })
    );
    console.log(newCars)
  }

  return (
    <div>
      {newCars.map((newCar) => (
        <>
          <p key={newCar.id}>
            {newCar.id} - {newCar.name}
            </p>
          <button onClick={()=> {handleNewCars(newCar.id)}}>Excluir</button>
        </>
        ))}
      
    </div>
  )
}

export default AnotherList