import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Store from './data/Store.js'
import './index.css'

export const Context = createContext(null)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context.Provider value={{
      store: new Store()
    }}>
    <App />
  </Context.Provider>
)
