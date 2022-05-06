import * as React from 'react';
import './style.scss'
import { Routes, Route } from 'react-router-dom'
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
    </Routes>
  )
}

export default App
