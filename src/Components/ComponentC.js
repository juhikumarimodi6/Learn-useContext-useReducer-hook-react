import { useGlobalState } from '../Context/StateProvider'

const ComponentC = () => {
    const countContext = useGlobalState();
  return (
    <div>
        ComponentC {countContext.countState}
        <button onClick={() => countContext.countDispatch('INCREMENT')}> Increment </button>
        <button onClick={() => countContext.countDispatch('DECREMENT')}> Decrement </button>
        <button onClick={() => countContext.countDispatch('RESET')}> Reset </button>
    </div>
  )
}

export default ComponentC
