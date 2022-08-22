import AnotherComponent from "./AnotherComponent"

function FirstComponent() {
  // Algum comentário
  const name = 'Ronaldo'

  return (
    <div className="firstComponent">
      {/* Comentário no JSX */}
      <AnotherComponent />
      <p>Primeiro component</p>
      {2+2}
      <p>Nome: {name}</p>
      
    </div>
  )
}

export default FirstComponent