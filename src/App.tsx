import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { InicialPage } from './pages/InicialPage';
import { LoginPage } from './pages/LoginPage';
import { MessageProvider } from './contexts/MessageContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <MessageProvider>
          <Routes>
            <Route path="/" element={<InicialPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </MessageProvider>
      </BrowserRouter>
    </>
  )
}

export default App
