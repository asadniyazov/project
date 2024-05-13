import './App.css'
import Add from './Pages/Add'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adminpanel from './Pages/Adminpanel'
import AdminLayout from './Layout/AdminLayout';
import Update from './Pages/Update';
import Home from './Pages/Home';
import Basket from './Pages/Basket';
import MainProvider from './context/MainProvider';
function App() {
  return (
    <>
    <MainProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route path="" element={<Home />} />
          <Route path="adminpanel" element={<Adminpanel />} />
          <Route path="add" element={<Add />} />
          <Route path="basket" element={<Basket />} />
          <Route path="/adminpanel/update/:id" element={<Update />} />
          <Route path="*" element={<h1>No page</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </MainProvider>
    </>
  )
}

export default App
