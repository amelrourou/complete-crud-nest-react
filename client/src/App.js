import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home.page';

import Profil from './components/profils/profil';
import Profils from './components/profils/profils';
import ListProfils from './components/profils/listprofils';
import MyProfil from './components/profils/myprofile';

import CreateProfilPage from './pages/CreateProfil';

import CreateProfilFreelancerPage from './pages/CreateProfilFreelancer.page';
import FreelancerProfils from './components/Freelancerprofils/FreelancerProfils';
import ListFreelancerProfils from './components/Freelancerprofils/listFreelancerprofils';
import MyFreelancerProfil from './components/Freelancerprofils/myFreelancerprofile';
import FreelancerProfil from './components/Freelancerprofils/Freelancerprofil';
import CreateProfilClientPage from './pages/CreateProfilClient.page';
import ClientProfils from './components/Clientprofils/ClientProfils';
import ListClientProfils from './components/Clientprofils/listClientprofils';

import MyClientProfil from './components/Clientprofils/myClientprofile';
import ClientProfil from './components/Clientprofils/Clientprofil';

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

          <Route path="/addprofil" element={<CreateProfilPage />} />

          <Route path="/FreelancerProfils" element={<FreelancerProfils />} />
          <Route
            path="/listFreelancerprofils"
            element={<ListFreelancerProfils />}
          />

          <Route
            path="/addfreelancerprofil"
            element={<CreateProfilFreelancerPage />}
          />
          <Route path="/Freelancerprofils/:id" element={<FreelancerProfil />} />
          <Route
            path="/myFreelancerprofil/:id"
            element={<MyFreelancerProfil />}
          />

          <Route path="/addClientprofil" element={<CreateProfilClientPage />} />
          <Route path="/ClientProfils" element={<ClientProfils />} />
          <Route path="/listClientprofils" element={<ListClientProfils />} />

          <Route path="/Clientprofils/:id" element={<ClientProfil />} />
          <Route path="/myClientprofil/:id" element={<MyClientProfil />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
