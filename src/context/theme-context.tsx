import React, { useState } from 'react'
import { Radio, Divider } from 'antd'
import type { RadioChangeEvent } from 'antd'

//主题颜色
const themesContext: { [x: string]: any } = {
  light: {
    color: '#000',
    background: '#E86452',
    border: '4px solid blue',
    padding: '20px',
    type: 'light',
    buttomType: 'default'
  },
  dark: {
    color: '#fff',
    background: '#5B8FF9',
    border: '4px solid red',
    padding: '20px',
    type: 'dark',
    buttomType: 'primary'
  },
  gray: {
    color: 'darkgreen',
    background: '#aaa',
    border: '4px solid purple',
    padding: '20px',
    type: 'gray',
    buttomType: 'dashed'
  }
}

export interface ThemeContextProps {
  theme: { [x: string]: any }
  themes: any
  setTheme: (theme: string) => void
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  theme: themesContext.light,
  themes: themesContext,
  setTheme: () => {}
})

interface ThemeProviderProps {
  children: React.ReactNode
}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [value, setValue] = useState('light')
  const [themeContext, setThemeContext] = useState(themesContext.light)

  const handleRadioChange = (e: RadioChangeEvent) => {
    const val: string = e.target.value as string
    setValue(e.target.value)
    setThemeContext(themesContext[val])
  }

  return (
    <ThemeContext.Provider value={{ themes: themesContext, theme: themeContext, setTheme: setThemeContext }}>
      <Radio.Group onChange={handleRadioChange} value={value}>
        {Object.keys(themesContext).map(item => (
          <Radio value={item} key={item}>
            {item}
          </Radio>
        ))}
      </Radio.Group>
      <Divider style={{ background: themeContext.background }} />
      {children}
    </ThemeContext.Provider>
  )
}
