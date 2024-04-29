import './navbar.css'

export default function Navbar() {
    return (
        <div className="navbar__container">
            <div className="navbar__logo--subcontainer">
                <h1 className="navbar__header">
                    Sam Teigland
                </h1>
            </div>
            <ul className="navbar__ul">
                <li className="navbar__li">
                    <a target="_blank" rel="noopener noreferrer" href='https://www.websiteartificers.com' className="navbar__link">Web Dev</a>
                </li>
                <li className="navbar__li">
                    <a href='/' className="navbar__link">Contact</a>
                </li>
                <li className="navbar__li">
                    <a href='/' className="navbar__link">About</a>
                </li>
                <li className="navbar__li">
                    <a target="_blank" rel="noopener noreferrer" href='https://youtube.com/@SamTeigland' className="navbar__link">YouTube</a>
                </li>
            </ul>
        </div>
    )
}