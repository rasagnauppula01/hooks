//accessing DOM elements
import React, { useRef } from "react";

function FocusInput() {
    const inputRef = useRef(null);

    const focus = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Focus me!" />
            <button onClick={focus}>Focus Input</button>
        </div>
    );
}

export default FocusInput;
