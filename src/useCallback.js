// import React, { useState, useCallback } from "react";

// function ChildComponent({ onClick }) {
//     console.log("Child re-rendered");

//     return <button onClick={onClick}>Click me</button>;
// }

// function ParentComponent() {
//     const [count, setCount] = useState(0);

//     // Memoizing the function with useCallback to prevent unnecessary re-creations
//     const memoizedCallback = useCallback(() => {
//         console.log("Button clicked");
//     }, []); // Empty dependency array means the function will not be recreated on re-renders

//     return (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={() => setCount(count + 1)}>Increase Count</button>
//             <ChildComponent onClick={memoizedCallback} />
//         </div>
//     );
// }

// export default ParentComponent;





import React, { useState, useCallback } from "react";

// Wrap ChildComponent with React.memo to prevent unnecessary re-renders
const ChildComponent = React.memo(({ onClick }) => {
    console.log("Child re-rendered");

    return <button onClick={onClick}>Click me</button>;
});

function ParentComponent() {
    const [count, setCount] = useState(0);

    // Memoizing the callback function to prevent its recreation on every render
    const memoizedCallback = useCallback(() => {
        console.log("Button clicked");
    }, []); // Empty dependency array ensures the function is not recreated

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
            {/* Pass the memoized callback to the ChildComponent */}
            <ChildComponent onClick={memoizedCallback} />
        </div>
    );
}

export default ParentComponent;




// React.memo is useful when you have functional components that receive props and you want to prevent unnecessary re-renders.
// useCallback helps ensure that functions passed as props remain the same between renders, which is particularly important when passing functions down to child components wrapped in React.memo.
