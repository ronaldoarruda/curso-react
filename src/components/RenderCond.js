const RenderCond = ({ x, y }) => {

  return <div>
    {x > 5 && <p>X é maior que 5</p>}
    {x > 5 ? <p>X é um numero alto</p> : <p>X é um numero baixo</p>}
    <p>o valor de y é: {y}</p>
  </div>;
}

export default RenderCond;