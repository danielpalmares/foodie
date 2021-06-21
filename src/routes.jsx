import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Landing from './pages/withoutAuth/Landing';
import SignIn from './pages/withoutAuth/SignIn/index';
import SignUp from './pages/withoutAuth/SignUp/index';
import Discover from './pages/withAuth/Discover';
import Search from './pages/withAuth/Search';
import Upload from './pages/withAuth/Upload';
import Tutorials from './pages/withAuth/Tutorials';
import Profile from './pages/withAuth/Profile';
import Results from './pages/withAuth/Results';
import Recipe from './pages/withAuth/Recipe';

export default function Routes() {
  const { authenticatedUser } = useSelector(state => state.user);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/signin">
          {authenticatedUser ? <Redirect to="/discover" /> : <SignIn />}
        </Route>
        <Route path="/signup">
          {authenticatedUser ? <Redirect to="/discover" /> : <SignUp />}
        </Route>
        <Route path="/search" component={Search} />
        <Route path="/upload" component={Upload} />
        <Route path="/tutorials" component={Tutorials} />
        <Route path="/profile" component={Profile} />
        <Route path="/discover" component={Discover} />
        <Route path="/results" component={Results} />
        <Route path="/recipe" component={Recipe} />
      </Switch>
    </BrowserRouter>
  );
}
