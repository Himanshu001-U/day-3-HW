import "./header.css"

function Header() {
    return (
        <div className="head">
            <p className="p1">Family Wellness</p>
            <p className="p2">MASSAGE THERAPY</p>
            <div className="navbar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
        
    )
}

export default Header