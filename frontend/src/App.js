import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Basket from './components/Basket'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/basket" component={Basket} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
