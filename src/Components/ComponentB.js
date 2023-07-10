import { useGlobalState } from '../Context/StateProvider'

const ComponentB = () => {
    const countContext = useGlobalState();
  return (
    <div>
        ComponentB {countContext.countState.count}
        <button onClick={() => countContext.countDispatch('INCREMENT')}> Increment </button>
        <button onClick={() => countContext.countDispatch('DECREMENT')}> Decrement </button>
        <button onClick={() => countContext.countDispatch('RESET')}> Reset </button>
    </div>
  )
}

export default ComponentB
