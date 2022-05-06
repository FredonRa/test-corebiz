import * as React from 'react';
import logo from './logo.svg'
import './style.scss'
import { Routes, Route } from 'react-router-dom'
import ItemsPage from './pages/ItemsPage'
import HomePage from './pages/HomePage'
import { setStorageProducts } from './actions/cart.actions'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setStorageProducts())
  }, [])
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="items" element={<ItemsPage />} />
    </Routes>
  )
}

export default App
