import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Success from './components/Success';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
