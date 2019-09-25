import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { HeaderSection } from "./Layouts/HeaderSection";
import { TitleSection } from "./Layouts/TitleSection";
import { ThemeProvider } from "styled-components";
import { initialTheme } from "./theme";
import { GlobalStyle } from "./globalStyles";
import { Button } from "./components/Button/Button";

function App() {
  const textAreaRef = useRef(null);
  const mailRef = useRef(null);
  const [showElements, setState] = useState(true);
  const buildClipboard = () => {
    setState(false);
    setTimeout(() => {
      const styles = document.getElementsByTagName("style");
      const html = document.getElementsByTagName("html")[0];
      Array.prototype.slice.call(styles).forEach(styleTag => {
        mailRef.current.insertBefore(styleTag, mailRef.current.firstChild);
      });
      textAreaRef.current.value = new XMLSerializer().serializeToString(html);
      textAreaRef.current.select();
      document.execCommand("copy");
    }, 200);
    setTimeout(() => setState(true), 1000);
  };
  return (
    <ThemeProvider theme={initialTheme}>
      <div ref={mailRef}>
        <GlobalStyle />
        <HeaderSection />
        <TitleSection />
        {showElements && (
          <Button onClick={() => buildClipboard()}>Copy MailPreview</Button>
        )}
        <textarea ref={textAreaRef} style={{ width: "0px", height: "0px" }} />
      </div>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
