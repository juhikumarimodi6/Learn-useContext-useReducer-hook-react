import { useGlobalState } from '../Context/StateProvider'

const ComponentA = () => {
    const countContext = useGlobalState();
  return (
    <div>
        ComponentA {countContext.countState.count}
        <button onClick={() => countContext.countDispatch('INCREMENT')}> Increment </button>
        <button onClick={() => countContext.countDispatch('DECREMENT')}> Decrement </button>
        <button onClick={() => countContext.countDispatch('RESET')}> Reset </button>
    </div>
  )
}

export default ComponentA
