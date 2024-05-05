import { useState } from "react";

import Timer from "./components/Timer"
import DarkModeToggle from "./components/DarkModeToggle"

export default function App() {

  const [isDark, setIsDark] = useState(false);

  function handleToggle() {
    setIsDark(!isDark);
  }

  console.log(isDark);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-slate-100">
        <div className="absolute top-0 left-0">
          <DarkModeToggle darkMode={isDark} onToggleDarkMode={handleToggle}></DarkModeToggle>
        </div>
        <Timer></Timer>
      </div>
    </>
  )
}