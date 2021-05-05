import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalContextProvider } from './contexts/GlobalContextProvider';
import Discover from './pages/Discover';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Upload from './pages/Upload';

import CookingTime from './main/CookingTime';

import Login from './pages/Login';

import './styles/global.scss';
import SignUp from './pages/SignUp';

export default function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={SignUp} />
            <Route path="/favorites" exact component={Favorites} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/search" exact component={Search} />
            <Route path="/upload" exact component={Upload} />
          </Switch>
        </BrowserRouter>
      </div>
    </GlobalContextProvider>
  );
}
