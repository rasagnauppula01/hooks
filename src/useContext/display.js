// import { createContext, useContext } from "react";
// const ThemeContext = createContext();

// function ThemeDisplay() {
//     const { theme, toggleTheme } = useContext(ThemeContext);

//     return (
//         <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
//             <h1>The current theme is {theme}</h1>
//             <button onClick={toggleTheme} style={{color:"black"}}>Toggle Theme</button>
//         </div>
//     );
// }
// export default ThemeDisplay;

import React, { useContext } from "react";
import ThemeProvider from "./provider";


function ThemeDisplay() {
    const { theme, toggleTheme } = useContext(ThemeProvider);

    return (
        <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
            <h1>The current theme is {theme}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

export default ThemeDisplay;
