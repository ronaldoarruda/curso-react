import {useEffect, useState} from 'react'

const Hooks = () => {
  let idade = 30
  const changeAge = () => {
    idade = 31
    console.log(idade)
  }

 //maneira em que renderiza a tela, utilizando o useState
  const [novaIdade, setNovaIdade] = useState(40)
  const changeNewAge = () => {
    setNovaIdade(45)
  }

  useEffect(() => {
    console.log("Testando");
  })

  return (
    <div>
      <p>Idade: {idade}</p>
      <button onClick={changeAge}>Mudar idade</button>

      {/*maneira de fazer com que a idade atualize em tela, utilizando useState */}
      <p>Idade: {novaIdade}</p>
      <button onClick={changeNewAge}>Mudar nova idade</button>
    </div>
  )
}

export default Hooks