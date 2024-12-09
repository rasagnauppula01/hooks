import React, { useMemo } from "react";

function Example({ count }) {
    console.log("count:", count); // Check the value of count

    const expensiveCalculation = (num) => {
        console.log("Calculating...");
        return (Number(num) || 0) * 2;  // Ensure num is a number
    };

    const result = useMemo(() => expensiveCalculation(count), [count]);

    return <div>Result: {result}</div>;
}

export default Example;
