import { Link } from "react-scroll";
import PromoImage from '../../web-assets/images/hd1-500.png';
import './Header.scss';

export default function Header() {
    return (
        <header id="header">
            <div className="header-container">
                <div className="header-layer">
                    <h1 className="layer-title">Monster NFT</h1>
                    <p className="layer-text">The Monster Ape Club is a collection of 7,999 Monster Ape NFTs inspired by the new wealthy generation of crypto-currency and NFTs.</p>
                    <div className="layer-group">
                        <a href="#Opensea" target="_blank" rel="noopener" className="btn-layer">Buy on Opensea</a>
                    </div>
                </div>
                <div className="header-layer">
                    <img src={ PromoImage } alt="Monster NFT" className="header-character" />
                </div>
            </div>
            <Link activeClass="active" className="arrow-container" to="features" spy={true} smooth={true} offset={0} duration={500}>
                <svg viewBox="0 0 24 24" className="arrow-icon"><path d="m7.41 8.295 4.59 4.58 4.59-4.58L18 9.705l-6 6-6-6 1.41-1.41Z" /></svg>
            </Link>
        </header>
    )
}