import Character10 from '../../web-assets/images/characters/character-10.jpg';
import Character11 from '../../web-assets/images/characters/character-11.jpg';
import Character12 from '../../web-assets/images/characters/character-12.jpg';
import './Team.scss';

export default function Team() {
    return (
        <div id="team">
            <div className="team-container">
                <div className="team-column">
                    <h2 className="column-title">Our Team</h2>
                </div>
                <div className="team-column">
                    <div className="team-character-list">
                    <div className="card-item">
                            <img src={ Character10 } alt="Yilmaz Avatar" className="card-image" />
                            <span className="card-title">Yilmaz Ev</span>
                            <span className="card-biography">Front-end Developer</span>
                            <div className="card-url-buttons">
                                <a href="#twitter-url" className="card-icon-wrapper --twitter">
                                    <svg className="card-icon-image" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83A7.72 7.72 0 0 0 23 3Z" /></svg>
                                </a>
                            </div>
                        </div>
                        <div className="card-item">
                            <img src={ Character11 } alt="Yilmaz Avatar" className="card-image" />
                            <span className="card-title">Yilmaz Ev</span>
                            <span className="card-biography">Front-end Developer</span>
                            <div className="card-url-buttons">
                                <a href="#twitter-url" className="card-icon-wrapper --twitter">
                                    <svg className="card-icon-image" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83A7.72 7.72 0 0 0 23 3Z" /></svg>
                                </a>
                            </div>
                        </div>
                        <div className="card-item">
                            <img src={ Character12 } alt="Yilmaz Avatar" className="card-image" />
                            <span className="card-title">Yilmaz Ev</span>
                            <span className="card-biography">Front-end Developer</span>
                            <div className="card-url-buttons">
                                <a href="#twitter-url" className="card-icon-wrapper --twitter">
                                    <svg className="card-icon-image" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83A7.72 7.72 0 0 0 23 3Z" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}