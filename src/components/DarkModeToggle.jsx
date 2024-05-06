export default function DarkModeToggle({ darkmode, onToggleDarkMode }) {
    return (
        <button onClick={onToggleDarkMode} className="dark:text-white">darkmode</button>
    )
}