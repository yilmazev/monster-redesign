import MainView from './components/MainView';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import './App.scss';

export default function App() {
    return (
        <div className="page-content">
            <Navbar />
            <MainView />
            <Footer />
        </div>
    )
}