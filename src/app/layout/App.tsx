import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteype = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: paletteype,
      background: {
        default: paletteype === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  function makeItDark() {
    setDarkMode(!darkMode);
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header makeItDark={makeItDark} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
