import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader'

import createHistory from 'history/createBrowserHistory'

import App from './App'
import createNewStore from 'src/redux/createNewStore'

import registerServiceWorker from './registerServiceWorker'
import './index.css'

const history = createHistory()
const store = createNewStore(history)

//https://github.com/ReactTraining/react-router/issues/4477 zsid "react-router-redux": "next" 교체로 에러 해결
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Component />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
};

render(App);

if (module.hot) {
  module.hot.accept('src/App', () => {
    render(App)
  })
}

registerServiceWorker()
