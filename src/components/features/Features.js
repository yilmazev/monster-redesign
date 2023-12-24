import Character1 from '../../web-assets/images/characters/character-1.jpg';
import Character2 from '../../web-assets/images/characters/character-2.jpg';
import Character4 from '../../web-assets/images/characters/character-4.jpg';
import './Features.scss';

export default function Features() {
    return (
        <div id="features">
            <div className="features-container">
                <div className="features-column">
                    <h2 className="column-title">Features</h2>
                    <p className="column-paragraph">The Monster Ape Club is a collection of 7,999 Monster Ape NFTs inspired by the new wealthy generation of crypto-currency and NFTs.<br /><br />Each NFT is a unique 3D artwork generated from the collection of more than 200+ traits. The objective is to build the strongest community and project around NFTs.</p>
                </div>
                <div className="features-column">
                    <div className="features-character-list">
                        <img src={ Character1 } alt="NFT Monster" className="features-character" />
                        <img src={ Character2 } alt="NFT Monster" className="features-character" />
                        <img src={ Character4 } alt="NFT Monster" className="features-character" />
                    </div>
                </div>
            </div>
        </div>
    )
}