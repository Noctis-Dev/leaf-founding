import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ManageProjects from './pages/ManageProjects/ManageProjects';
import CreateProject from './pages/CreateProject/CreateProject';
import AllProjects from './pages/AllProjects/AllProjects';
import Donate from './pages/Donate/Donate';

function App() {
  return (
    <>
      <Router>
        <Header isAccountVisible={true}/>
        <div>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/manage" Component={ManageProjects} />
            <Route path="/create" Component={CreateProject} />
            <Route path="/all" Component={AllProjects} />
            <Route path="/donate" Component={Donate} />
          </Routes>
        </div> 
        <Footer />
      </Router>
    </>
  )
}

export default App ;


