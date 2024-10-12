import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { InicialPage } from './pages/InicialPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InicialPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
