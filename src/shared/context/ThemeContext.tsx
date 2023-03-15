
import { createContext, useCallback, useMemo, useState, useContext } from 'react' 
import { DarkTheme, LightTheme } from '../themes';
import { ThemeProvider } from '@mui/material'
import Box from '@mui/material/Box';
interface IthemeContextData{
    themeName:'light' | 'dark';
    toggleTheme: ()=> void;    
}
const ThemeContext = createContext({} as IthemeContextData);

export const useAppThemeContext = () =>{
    return useContext(ThemeContext)
}

export const AppThemeProvider: React.FC <{children: React.ReactNode}> = ({children}) =>{
    const [themeName, setThemeName] = useState<'light' | 'dark'>('dark');

    const toggleTheme = useCallback(()=>{
        setThemeName(oldThemeName => oldThemeName === 'light'? 'dark': 'light')
    }, []);
    const theme = useMemo(() => {
        if(themeName === 'light') return LightTheme;
        return DarkTheme;
    }, [themeName])
    return(
        <ThemeContext.Provider value={{themeName, toggleTheme}}>
            <ThemeProvider theme={theme}>
                <Box width='100vh' height='100vh' bgcolor={theme.palette.background.default}>
                {children} 
                </Box>
           
            </ThemeProvider>
           
        </ThemeContext.Provider>
    )
}