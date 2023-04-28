import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Profil from './components/profil';
import Profils from './components/profils';
import ListProfils from './components/listprofils';
import Home from './pages/Home.page';
import MyProfil from './components/myprofile';
import CreateProfilEmployeurPage from './pages/CreateProfilEmployeur.page';
import CreateProfilFreelancerPage from './pages/CreateProfilFreelancer.page';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listprofils" element={<ListProfils />} />
          <Route path="/profils" element={<Profils />} />
          <Route path="/profils/:id" element={<Profil />} />
          <Route path="/myprofil/:id" element={<MyProfil />} />
          <Route path="/addemployeur" element={<CreateProfilEmployeurPage />} />
          <Route
            path="/addfreelancerprofil"
            element={<CreateProfilFreelancerPage />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
