import useLocalStorage from "./useLocalStorage"
import { useEffect } from "react";


function useDarkMode() {
const [darkMode, setDarkMode] = useLocalStorage(key)

useEffect((e)=> {
    e.preventDefault
    if(darkMode === true) {
        // return <div className="dark-mode"></div> === <body></body>
        return document.querySelector("body").classList.add("dark-mode")
    } else { 
        return document.querySelector("body").classList.remove("dark-mode") 
    }}

    const darkModeSetter = (value) => {
        setDarkMode(value)
    
    })

return [darkMode, darkModeSetter]
}

export default useDarkMode;