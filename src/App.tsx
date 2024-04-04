import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import FooterHome from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ManageProjects from './pages/ManageProjects/ManageProjects';
import CreateProject from './pages/CreateProject/CreateProject';
import { AllProjects } from './pages/AllProjects/AllProjects';
import Donate from './pages/Donate/Donate';
import { withProviders } from './utils/withProviders';
import { useApi, useAccount } from '@gear-js/react-hooks';
import { ApiLoader } from './utils/ApiLoader';
import ConfirmProject from './pages/CreateProject/ConfirmProject';
import Milestones from './pages/CreateProject/Milestones';

function App() {

  const { isApiReady } = useApi();
  const { isAccountReady } = useAccount();

  const isAppReady = isApiReady && isAccountReady;

  return (
    <>
      <Header isAccountVisible={isAccountReady} />
      <div className='bg-gray-900 dark:bg-gray-900'>
        {
          isAppReady ? 
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/manage" Component={ManageProjects} />
            <Route path="/create" Component={CreateProject} />
            <Route path="/create/confirm" Component={ConfirmProject} />
            <Route path="/create/Milestones" Component={Milestones} />
            <Route path="/all" Component={AllProjects} />
            <Route path="/donate" Component={Donate} />
          </Routes> : <ApiLoader />
        }
      </div>
      <FooterHome />
    </>
  );
}

export default withProviders(App);



