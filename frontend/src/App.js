import { BrowserRouter, Route, Switch } from 'react-router-dom'
//import Home from './components/Home'
import OrderReceived from './components/Order/OrderReceived'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={OrderReceived} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
