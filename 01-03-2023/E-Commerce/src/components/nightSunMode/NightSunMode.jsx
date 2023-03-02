import "./index.css"

const NightSunMode = ({ setDarkMode, isDarkMode }) => {
    return (
        <button
        className="toggle-mode"
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>
    )
};


export default NightSunMode;