import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom'

interface TopicParam {
  id: string
}

export const Topics = () => {
  const match = useRouteMatch()

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:id`}>
          <Topic />
        </Route>
        <Route path={`${match.path}`}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  )
}
const Topic = () => {
  const { id } = useParams<TopicParam>()

  return <h3>Requested topic ID: {id}</h3>
}
