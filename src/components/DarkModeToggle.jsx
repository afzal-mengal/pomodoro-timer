import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function DarkModeToggle({ darkMode, onToggleDarkMode }) {

    const isDark = darkMode === "dark" ? true : false

    return (
        <DarkModeSwitch style={{ margin: '1rem' }}
            checked={isDark}
            onChange={onToggleDarkMode}
            size={35}></DarkModeSwitch>
    );
}