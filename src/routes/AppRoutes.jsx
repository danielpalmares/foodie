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
        {authenticatedUser && (
          <Switch>
            <Route path="/discover">{authenticatedUser && <Discover />}</Route>
            <Route path="/search">{authenticatedUser && <Search />}</Route>
            <Route path="/upload">{authenticatedUser && <Upload />}</Route>
            <Route path="/tutorials">
              {authenticatedUser && <Tutorials />}
            </Route>
            <Route path="/profile">{authenticatedUser && <Profile />}</Route>
            <Route path="/results">{authenticatedUser && <Results />}</Route>
            <Route path="/recipe">{authenticatedUser && <Recipe />}</Route>
            <Route path="/avatars">{authenticatedUser && <Avatars />}</Route>
          </Switch>
        )}

        {/* not found route */}
        <Route exact path="*">
          {authenticatedUser ? <Redirect to="/discover" /> : <NotFound />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
