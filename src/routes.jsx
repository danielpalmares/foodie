import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/withoutAuth/Landing';
import SignIn from './pages/withoutAuth/SignIn/index';
import SignUp from './pages/withoutAuth/SignUp/index';
import Discover from './pages/withAuth/Discover';
import Search from './pages/withAuth/Search';
import Upload from './pages/withAuth/Upload';
import Tutorials from './pages/withAuth/Tutorials';
import Profile from './pages/withAuth/Profile';
import Recipe from './pages/withAuth/Recipe';
import Results from './pages/withAuth/Results';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/search" component={Search} />
        <Route path="/upload" component={Upload} />
        <Route path="/tutorials" component={Tutorials} />
        <Route path="/profile" component={Profile} />
        <Route path="/discover" exact component={Discover} />
        <Route path="/discover/results" component={Results} />
        <Route path="/discover/recipe" component={Recipe} />
      </Switch>
    </BrowserRouter>
  );
}
