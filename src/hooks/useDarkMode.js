import useLocalStorage from "./useLocalStorage"
import { useEffect } from "react";


const useDarkMode = () => {

const [darkMode, setDarkMode] = useLocalStorage()

useEffect(()=> {

    if (darkMode === true) {
        return document.querySelector("body").classList.add("dark-mode")
    } else { 
        return document.querySelector("body").classList.remove("dark-mode") 
    }})

    const darkModeSetter = (value) => {
        setDarkMode(value)
    }

return [darkMode, darkModeSetter]
}

export default useDarkMode;