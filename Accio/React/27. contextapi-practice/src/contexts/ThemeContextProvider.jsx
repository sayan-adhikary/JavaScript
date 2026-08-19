import React, { useState } from 'react'
import ThemeContext from './ThemeContext.js'

function ThemeContextProvider({children}) {
    // light, dark
    const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider