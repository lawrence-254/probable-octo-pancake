import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AddInventory from './pages/AddInventory'
import Home from './pages/Home'
import ViewInventory from './pages/ViewInventory'
import EditInventory from './pages/EditInventory'
import DeleteInventory from './pages/DeleteInventory'

function App() {
  return (
    <div>
<Routes>
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="/inventory/add" element={<AddInventory />} />
    <Route path="/inventory/view/:id" element={<ViewInventory />} />
    <Route path="/inventory/edit/:id" element={<EditInventory />} />
    <Route path="/inventory/delete/:id" element={<DeleteInventory />} />
  </Route>
</Routes>
    </div>
  )
}

export default App
