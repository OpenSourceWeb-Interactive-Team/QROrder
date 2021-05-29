import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyle from './styles/global'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './modules'

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <GlobalStyle />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
