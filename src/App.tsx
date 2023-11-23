import { DefaultTheme, ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import usePersistedState from "./hooks/usePersistedState";
import ReactSwitch from "react-switch";
import MainButton from "./components/MainButton";
import MainInput from "./components/MainInput";
import { useState } from "react";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);
  const [text, setText] = useState("");
  // const themeContext = useContext(ThemeContext);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <ReactSwitch
        onChange={toggleTheme}
        checked={theme.title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={50}
        handleDiameter={30}
        // offColor={themeContext?.colors.primary || '#ffffff'}
        // onColor={themeContext?.colors.secondary || '#000000'}
      />
      <MainInput
        type="text"
        placeholder=""
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <MainButton onClick={() => alert(text)}>Click Here!</MainButton>
    </ThemeProvider>
  );
}
export default App;
