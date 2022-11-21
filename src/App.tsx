import { useSelector, useDispatch } from "react-redux"
export default function App() {

  const counter = useSelector((state: any) => state.counter)

  const dispatch = useDispatch()

  const handleIncrease = () => { 
    const action = { type: 'ADD'}
    dispatch(action) 
  }
  const handleDecrease = () => { 
    const action = { type: 'REMOVE' }  
    dispatch(action) 
  }

  return (
    <>
      <h1>counter: {counter}</h1>
      <button onClick={handleIncrease}>aumentar</button>
      <button onClick={handleDecrease}>diminuir</button>`
      <CardList/>
    </>
  )
}

function CardList() {
  return (
    <CardItem/>
  )
}
function CardItem() {

  const dispatch = useDispatch()

  const handleIncrease = () => { 
    const action = { type: 'ADD'}
    dispatch(action) 
  }
  return <button onClick={handleIncrease}>Botão filho do filho</button>
}