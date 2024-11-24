import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainPage from './pages/MainPage.js';

function App() {
  return (
    <Router>
      <div className="App">
        {/* 라우터를 통해 페이지 렌더링 */}
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
