import Home from './header/Header';
import Features from './features/Features';
import Roadmap from './roadmap/Roadmap';
import Team from './team/Team';
import FAQ from './faq/FAQ';

export default function MainView() {
    return (
        <>
            <Home />
            <Features />
            <Roadmap />
            <Team />
            <FAQ />
        </>
    )
}