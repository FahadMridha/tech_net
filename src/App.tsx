import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hooks"

function App() {
  
  const {count} = useAppSelector (state=> state.counter)

  const dispatch = useAppDispatch ()

  return (
    <>   
      <h2 className="bg-red-500">Tech Net</h2>
      <div>
        <button
        onClick={()=>dispatch(increment())}>increment</button>
        <button
        className="p-8"
        onClick={()=>dispatch(incrementByAmount(5))}>increment by amount</button>
      </div>
      <div>{count}</div>
      <div>
        <button
        onClick={()=>dispatch(decrement())}
        >decrement</button>
      </div>
    </>

  )
}

export default App
