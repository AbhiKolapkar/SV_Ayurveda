import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import Header from "./components/Header/Header";
import RouterRoutes from "./routes/RouterRoutes";
import Footer from "./components/Footer/Footer";
import WhatsApp from "./common/WhatsApp";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />

        <main>
          <WhatsApp />
          <RouterRoutes />
        </main>

        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
