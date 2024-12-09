import React, { useState } from "react";
import Example from "./useMemo";

function App2() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Example Component</h1>
            <Example count={count} />
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
        </div>
    );
}

export default App2;
