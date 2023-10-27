import create  from "zustand";
//create store for counter
const CounterStore =create((set)=>({
    count : 0 ,
    increment:()=>set((state)=>({count:state.count +1})),
    decrement:()=>set((state)=>({count:state.count-1}))
}));
export default CounterStore;


