import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import App from '../pages/App/App'
import ReactHooks from '../components/ReactHooks'
import RouterPage from '../pages/routerPage'
import RouterDetail from '../pages/routerPage/routerDetail'

function AppRouter () {
  return (
    <Router>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/reactHooks">react hooks</Link></li>
        <li><Link to="/routerPage">router page</Link></li>
      </ul>
      <Route path="/" exact component={App}></Route>
      <Route path="/reactHooks" component={ReactHooks}></Route>
      <Route path="/routerPage" component={RouterPage}></Route>
      <Route path="/routerDetail/:id" component={RouterDetail}></Route>
    </Router>
  )
}

export default AppRouter