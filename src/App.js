import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PresidentPage from './pages/PresidentPage';
import StateInfoPage from './pages/StateInfoPage';
import StateDetailPage from './pages/StateDetailPage';
import { useContext, useEffect, useRef } from 'react';
import { DataContext } from './Provider/DataProvider';

function App() {
  const { setData } = useContext(DataContext);
  const navigate = useNavigate();
  const dataFromLocalStorage = JSON.parse(localStorage.getItem('dataUSElection'));

  useEffect(() => {
    navigate('/');

    if (!dataFromLocalStorage) {
      fetch('https://api-election.cbsnews.com/api/public/races2/2020/G?filter.officecode=P')
        .then((response) => {
          if (response.status !== 200) {
            console.log('Error: ' + response.status);
            return;
          }
          response.json().then((data) => {
            setData(data);
            localStorage.setItem('dataUSElection', JSON.stringify(data));
          });
        })
        .catch((err) => {
          console.log('Error :', err);
        });
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="container flex mt-[100px] ">
        <Routes>
          <Route path="/" element={<PresidentPage />} />
          <Route path="/president" element={<PresidentPage />} />
          <Route path="/state" element={<StateInfoPage />} />
          <Route path="/state-detail" element={<StateDetailPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
