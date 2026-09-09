import './Navbar.css'
import logo from '../../assets/CareerGPS-logo.png'

function Navbar(){
    return (
        <nav class="navbar">
            <img src={logo} alt="CareerGPS logo" id="logo"/>

            <a href="/" class="nav-btn">Home</a>
            <a href="/tutors" class="nav-btn">Find a Tutor</a>
            <a href="/resume" class="nav-btn">Resume Help</a>
            <a href="/roadmap" class="nav-btn">Career Roadmap</a>
            <a href="/login" class="nav-btn"> Log In</a>
        </nav>
    )
}

export default Navbar;