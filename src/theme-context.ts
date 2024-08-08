import React, { useState } from 'react'

interface ThemeContextProps {
  theme: string
  setTheme: (theme: string) => void
}

//主题颜色
const themes = {
  dark: {
    color: '#5B8FF9',
    background: '#5B8FF9',
    border: '1px solid #5B8FF9',
    type: 'dark',
    buttomType: 'primary'
  },
  light: {
    color: '#E86452',
    background: '#E86452',
    border: '1px solid #E86452',
    type: 'light',
    buttomType: 'default'
  }
}

const defaultValue: ThemeContextProps = {
  theme: 'dark',
  setTheme: () => {}
}

const ThemeContext = React.createContext<ThemeContextProps>(defaultValue)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(themes.dark)

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>\
}
