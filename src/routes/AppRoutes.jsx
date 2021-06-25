import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Landing from '../pages/withoutAuth/Landing';
import SignIn from '../pages/withoutAuth/SignIn';
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
  const { authenticatedUser } = useSelector(state => state.user);

  return (
    <BrowserRouter>
      <Switch>
        {/* initial routes */}
        <Route exact path="/">
          {authenticatedUser ? <Redirect to="/discover" /> : <Landing />}
        </Route>
        <Route path="/signin">
          {authenticatedUser ? <Redirect to="/discover" /> : <SignIn />}
        </Route>
        <Route path="/signup">
          {authenticatedUser ? <Redirect to="/discover" /> : <SignUp />}
        </Route>

        {/* app routes */}
        <Route path="/discover">
          {authenticatedUser ? <Discover /> : <Redirect to="/signin" />}
        </Route>
        <Route path="/search">
          {authenticatedUser ? <Search /> : <Redirect to="/signin" />}
        </Route>
        <Route path="/upload">
          {authenticatedUser ? <Upload /> : <Redirect to="/signin" />}
        </Route>
        <Route path="/tutorials">
          {authenticatedUser ? <Tutorials /> : <Redirect to="/signin" />}
        </Route>
        <Route path="/profile">
          {authenticatedUser ? <Profile /> : <Redirect to="/signin" />}
        </Route>
        <Route path="/results">
          {authenticatedUser ? <Results /> : <Redirect to="/signin" />}
        </Route>
        <Route path="/recipe">
          {authenticatedUser ? <Recipe /> : <Redirect to="/signin" />}
        </Route>
        <Route path="/avatars">
          {authenticatedUser ? <Avatars /> : <Redirect to="/signin" />}
        </Route>

        {/* not found route */}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
