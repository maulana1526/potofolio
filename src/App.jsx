
import './App.css';
import Header from './komponen/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sekolah from './pages/Sekolah';
import Main from './pages/main';
function App() {
  return (
    <div className="App">
     <Header/>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Main />} />
     <Route path="/sekolah" element={<Sekolah />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
