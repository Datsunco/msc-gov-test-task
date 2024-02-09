import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Store from './data/Store.js'
import './index.css'
import data from './data/prof.json'

export const Context = createContext(null)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context.Provider value={{
      store: new Store(data)
    }}>
    <App />
  </Context.Provider>
)
