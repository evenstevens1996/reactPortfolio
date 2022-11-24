import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import FieldsDirectoryPage from './pages/FieldsDirectoryPage';
import './App.css';
import FieldDetailPage from './pages/FieldDetailPage';
import AboutPage from './pages/AboutPage';

function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='directory' element={<FieldsDirectoryPage />} />
                <Route 
                    path='directory/:fieldId' 
                    element={<FieldDetailPage />}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

