import { useState, memo, useMemo, useCallback } from "react";

const Child = memo(({ data, onClick }: { data: { value: number }; onClick: () => void }) => {
   console.log("Child rendered");

   // Simulate heavy computation
   const expensiveCalculation = useMemo(() => {
      let sum = 0;
      for (let i = 0; i < 100000000; i++) {
         sum += i;
      }
      return sum;
   }, []);

   return (
      <div>
         <p>Value: {data.value}</p>
         <button onClick={onClick}>Click Me</button>
         <p>Computed: {expensiveCalculation}</p>
      </div>
   );
});

export default function App() {
   const [count, setCount] = useState(0);

   const value = { value: 42 };
   const handleClick = useCallback(() => {
      console.log("Clicked");
   }, []);

   return (
      <div>
         <h1>Counter: {count}</h1>

         <button onClick={() => setCount((prev) => prev + 1)}>Increment Parent</button>

         <Child data={value} onClick={handleClick} />
      </div>
   );
}
