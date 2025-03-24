import {createContext, PropsWithChildren, useContext, useEffect, useState} from "react";
import "./themes/dark.css";
import "./themes/light.css";

// eslint-disable-next-line react-refresh/only-export-components
export enum Theme {
  DARK='dark',
  LIGHT='light',
}

const THEME_CLASSES = {
  [Theme.DARK.toString()]: "theme-dark",
  [Theme.LIGHT.toString()]: "theme-light"
};

const ThemeContext = createContext<{ theme: Theme; changeTheme: (t: Theme) => void; } | null>(null);

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const storedTheme = localStorage.getItem('theme');
  const t = (storedTheme && Object.keys(THEME_CLASSES).includes(storedTheme)) ? storedTheme as Theme : Theme.DARK;

  const [theme, setTheme] = useState<Theme>(t);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const changeTheme = (t : Theme) => {
    setTheme(t);
  }

  const contextValue = {
    theme,
    changeTheme,
  };

  if (!storedTheme || !(Object.keys(THEME_CLASSES).includes(storedTheme))) {
    localStorage.setItem("theme", theme);
  }

  return <ThemeContext.Provider value={ contextValue }>
    <div className={THEME_CLASSES[theme]}>
      { children }
    </div>
  </ThemeContext.Provider>
}

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};


// eslint-disable-next-line react-refresh/only-export-components
export { ThemeProvider, useTheme }
