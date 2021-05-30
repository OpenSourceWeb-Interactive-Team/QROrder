import { BrowserRouter, Route, Switch } from 'react-router-dom'
import OrderReceived from './components/Order/OrderReceived'
import Home from './components/Home'
import Basket from './components/Basket'
import Payment from './components/Payment'
import QRCode from './components/QRCode'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/basket" component={Basket} />
        <Route exact path="/ordered" component={OrderReceived} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/qrcode" component={QRCode} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
