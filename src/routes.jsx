import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/withoutAuth/Landing';
import SignIn from './pages/withoutAuth/SignIn/index';
import SignUp from './pages/withoutAuth/SignUp/index';
import CookingTime from './pages/withAuth/Discover';
import Search from './pages/Search';
import Upload from './pages/Upload';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile/_index';
import Recipe from './pages/Recipe';
import Results from './pages/Results';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/search" exact component={Search} />
        <Route path="/search/results" component={Results} />
        <Route path="/upload" component={Upload} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/profile" component={Profile} />
        <Route path="/discover" exact component={CookingTime} />
        <Route path="/discover/recipes" component={Recipe} />
      </Switch>
    </BrowserRouter>
  );
}
