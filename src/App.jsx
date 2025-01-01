import React from "react";
import { createRoot } from "react-dom/client";

import Main from "./components/Main.jsx";

function App() {
  return (
    <>
      <Main />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <App />
)

