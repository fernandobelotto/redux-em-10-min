import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { legacy_createStore } from 'redux'

import App from './App'

const initialState = {
  counter: 2 
}

function myReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case 'ADD':
      return { 
        counter: state.counter + 1
      }
    case 'REMOVE':
      return { 
        counter: state.counter - 1
      }
    default:
      return state
  }
}

const store = legacy_createStore(myReducer)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
