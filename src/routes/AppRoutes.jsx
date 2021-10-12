import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Landing from '../pages/withoutAuth/Landing';
import { Login } from '../pages/withoutAuth/Login';
import SignUp from '../pages/withoutAuth/SignUp';
import Discover from '../pages/withAuth/Discover';
import Search from '../pages/withAuth/Search';
import Upload from '../pages/withAuth/Upload';
import Tutorials from '../pages/withAuth/Tutorials';
import Profile from '../pages/withAuth/Profile';
import Results from '../pages/withAuth/Results';
import Recipe from '../pages/withAuth/Recipe';
import Avatars from '../pages/withAuth/Avatars';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  const { isAuthenticated } = useSelector(state => state.user);

  return (
    <BrowserRouter>
      <Switch>
        {/* initial routes */}
        <Route exact path="/">
          {isAuthenticated ? <Redirect to="/discover" /> : <Landing />}
        </Route>
        <Route path="/login">
          {isAuthenticated ? <Redirect to="/discover" /> : <Login />}
        </Route>
        <Route path="/register">
          {isAuthenticated ? <Redirect to="/discover" /> : <SignUp />}
        </Route>

        {/* app routes */}
        {isAuthenticated && (
          <Switch>
            <Route path="/discover">{isAuthenticated && <Discover />}</Route>
            <Route path="/search">{isAuthenticated && <Search />}</Route>
            <Route path="/upload">{isAuthenticated && <Upload />}</Route>
            <Route path="/tutorials">{isAuthenticated && <Tutorials />}</Route>
            <Route path="/profile">{isAuthenticated && <Profile />}</Route>
            <Route path="/results">{isAuthenticated && <Results />}</Route>
            <Route path="/recipe">{isAuthenticated && <Recipe />}</Route>
            <Route path="/avatars">{isAuthenticated && <Avatars />}</Route>
          </Switch>
        )}

        {/* not found route */}
        <Route exact path="*">
          {isAuthenticated ? <Redirect to="/discover" /> : <NotFound />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
