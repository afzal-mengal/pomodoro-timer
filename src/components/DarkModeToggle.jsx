import { useState } from "react"

export default function DarkModeToggle({ darkmode, onToggleDarkMode }) {
    return (
        <button onClick={onToggleDarkMode}>darkmode</button>
    )
}