import './Navbar.css';
import logo from '../../assets/CareerGPS-logo.png';

function Navbar({ darkMode, setDarkMode}){

    return (
        <nav className="navbar">
            <img src={logo} alt="CareerGPS logo" id="logo"/>

            <a href="/" className="nav-btn">Home</a>
            <a href="/tutors" className="nav-btn">Find a Tutor</a>
            <a href="/resume" className="nav-btn">Resume Help</a>
            <a href="/roadmap" className="nav-btn">Career Roadmap</a>
            <a href="/login" className="nav-btn"> Log In</a>

            <button  className="nav-btn" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
        </nav>
    );
}

export default Navbar;