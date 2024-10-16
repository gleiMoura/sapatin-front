import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { InicialPage } from './pages/InicialPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { MessageProvider } from './contexts/MessageContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <MessageProvider>
          <Routes>
            <Route path="/" element={<InicialPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
          </Routes>
        </MessageProvider>
      </BrowserRouter>
    </>
  )
}

export default App
