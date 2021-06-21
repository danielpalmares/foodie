import { useRouteMatch, Route, Switch } from 'react-router-dom';

import Results from '../../pages/withAuth/Results';
import Recipe from '../../pages/withAuth/Recipe';

export default function NestedRoutes({ results, recipe }) {
  let { path } = useRouteMatch();

  return (
    <Switch>
      {results && <Route path={`${path}/results`} render={Results} />}
      {recipe && <Route path={`${path}/recipe`} render={Recipe} />}
    </Switch>
  );
}
