import React from "react";
import ThemeDisplay from "./display";
import ThemeProvider from "./provider";

function App1() {
    return (
        <ThemeProvider>
            <ThemeDisplay />
        </ThemeProvider>
    );
  }
  
  export default App1;