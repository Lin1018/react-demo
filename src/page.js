import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import routerConfig from './router'

function AppRouter () {
  return (
    <Router>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/reactHooks">react hooks</Link></li>
        <li><Link to="/routerPage">router page</Link></li>
      </ul>
      
      <Switch>
        {
          routerConfig.map((item, index) => {
            return (
              <Route 
                path={ item.path }
                exact={ item.exact }
                component={ item.component }
                key={ index }
              />
            )
          })
        }
      </Switch>
    </Router>
  )
}

export default AppRouter