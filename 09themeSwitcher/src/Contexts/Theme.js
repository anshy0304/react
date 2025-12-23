import { useContext } from "react"
import React from "react"
export const ThemeContext = React.createContext({
    themeMode : "light",
    lightTheme :() => {},
    darkTheme : () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
}