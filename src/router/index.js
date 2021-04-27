import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import App from '../pages/App/App'
import ReactHooks from '../components/ReactHooks'

function AppRouter () {
  return (
    <Router>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/reactHooks">react hooks</Link></li>
      </ul>
      <Route path="/" exact component={App}></Route>
      <Route path="/reactHooks" component={ReactHooks}></Route>
    </Router>
  )
}

export default AppRouter