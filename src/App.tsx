import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageWrapper from './layout/PageWrapper';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import UserDetails from './pages/UserDetails';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PageWrapper />}>
        <Route index element={<Home />} />
        <Route path='/users/:login' element={<UserDetails />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
