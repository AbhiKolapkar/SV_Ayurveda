import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import Header from "./components/Header/Header";
import Router from "./routes/Router";
import Footer from "./components/Footer/Footer";
import WhatsApp from "./common/WhatsApp";

function App() {
  // axios
  //   .get("https://82b8-2405-204-3022-e7fd-ecd5-7772-b0ba-26fa.ngrok-free.app/getTreatments")
  //   .then((res) => console.log(res));
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />

        <main>
          <WhatsApp />
          <Router />
        </main>

        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
