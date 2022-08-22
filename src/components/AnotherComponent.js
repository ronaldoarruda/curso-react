const AnotherComponent = () => {

  const handleClick = () => {

    console.log("Clicked the button")
  }
  return (
    <div>
      <p>Segundo Componente</p>
      <button onClick={handleClick}>Evento de clique</button>
      <hr/>
    </div>
  )
}

export default AnotherComponent