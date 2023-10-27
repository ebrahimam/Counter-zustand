import CounterStore from "./CounterStore";
const Counter =()=>{
    const {count,increment,decrement} =CounterStore()
    return (
        <>
        <h1>{count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        </>
    )
}
export default Counter

