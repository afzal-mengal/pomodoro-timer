import { useState } from "react";

import Timer from "./components/Timer"
import DarkModeToggle from "./components/DarkModeToggle"

export default function App() {

  const [isDark, setIsDark] = useState('');

  function handleToggle() {
    setIsDark((prevState) => {
      if (prevState === 'dark') {
        return '';
      }
      else if (prevState === '') {
        return 'dark';
      }
    });
  }

  return (
    <>
      <div className={`flex items-center justify-center min-h-screen bg-slate-100 dark:bg-black ${isDark} transition duration-1000 ease-in-out`}>
        <div className="absolute top-0 left-0">
          <DarkModeToggle darkMode={isDark} onToggleDarkMode={handleToggle}></DarkModeToggle>
        </div>
        <Timer></Timer>
        <SpeedInsights />
      </div>
    </>
  )
}