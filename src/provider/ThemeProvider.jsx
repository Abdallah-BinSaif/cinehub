import {createContext, useEffect, useState} from "react";

export const ThemeContext = createContext()
const ThemeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(()=>{
        const storedMode = localStorage.getItem("darkMode");
        return storedMode === "true" || false
    })

    useEffect(() => {
        localStorage.setItem("darkMode", isDarkMode)
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }
    
    return (
        <ThemeContext.Provider value={{isDarkMode, toggleDarkMode}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;