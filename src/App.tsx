import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { InicialPage } from './pages/InicialPage';
import { LoginPage } from './pages/LoginPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InicialPage />} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
