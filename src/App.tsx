import { useState } from "react";
import { ThemeProvider } from "styled-components";
import * as C from "./App.styled";

const cores = {
  whitecolor: "#ffffff",
  lightgray: "#d6e2f0",
  grayshblue: "#7b879d",
  darkblue: "#1f3251",
};

function App() {
  return (
    <ThemeProvider theme={cores}>
      <C.Container>
        <C.Card>
          <C.QRCard></C.QRCard>
          <C.Content>
            <C.Title>
              Improve your front-end skills by building projects
            </C.Title>
            <C.Text>
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </C.Text>
          </C.Content>
        </C.Card>
      </C.Container>
    </ThemeProvider>
  );
}

export default App;
