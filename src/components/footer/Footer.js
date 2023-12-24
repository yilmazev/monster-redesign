import { Link } from "react-scroll";
import AppIcon from '../../web-assets/images/logo_nav.svg';
import './Footer.scss';

export default function Footer() {
    return (
        <div id="footer">
            <div className="footer-container">
                <div className="main">
                    <Link activeClass="active" className="footer-icon-wrapper" to="header" spy={true} smooth={true} offset={0} duration={500}>
                        <img src={ AppIcon } alt="App Icon" className="app-icon" />
                    </Link>
                    <h2 className="footer-title">Monster Ape Club</h2>
                    <p className="footer-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat, lorem vitae congue consectetur, libero turpis finibus sem, eget condimentum tortor magna ac urna.</p>
                </div>
                <div className="copyrights">
                        <span className="copyrights-text">© 2022 Monster Ape Club. All right reserved.</span>
                    
                        <span className="copyrights-text">Design and coded by <a href="https://yilmazev.github.io" rel="noreferrer" target="_blank" className="link-button">Yilmaz Ev</a></span>
                    
                </div>
            </div>
        </div>
    )
}