import 'bootstrap/dist/css/bootstrap.css'
import './style.css'
import Footer from './components/footer';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePages/homePage';
import AboutUsPage from './pages/HomePages/aboutUsPage';
import ContactUsPage from './pages/HomePages/contactPage';
import Shop from './pages/UserPages/Shop';
import Admin from './pages/Admin';
import Verify from './pages/verifiyPage';
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/HomePages/LoginPage';
import Register from './pages/HomePages/RegisterPage';
import PrivateRoute from './privateRoute ';
import Error from './pages/HomePages/erorrPage';
import ProfilePage from './pages/UserPages/profilePage';
import Cart from './pages/UserPages/cartPage';
import ProductTablePage from './pages/AdminPages/ProductTablePage'
import EditProduct from './components/product/EditProduct';
import CreateProduct from './components/product/createproduct';
import OrderDetails from './components/OrderDetails';
import OrderTable from './pages/AdminPages/orderTablePage';
import jwt_decode from 'jwt-decode'
import Cookies from "js-cookie";
import TestMonialPage from './pages/HomePages/testimonialPage';
import AdminSidebar from './components/AdminSidebar';
import Dashboard from './pages/AdminPages/DashboardPage';
import ContactUsTable from './pages/AdminPages/ContactUsTable';
import TestMonialTable from './pages/AdminPages/testimonialTable';

function App() {

  if (Cookies.get('token'))
    var decoded = jwt_decode(Cookies.get('token'));


  const routes = (
    <Routes>

      <Route path="/" exact element={<> <Navbar />
      <HomePage/> <AboutUsPage /> <TestMonialPage/> <ContactUsPage /> <Footer /></>} />
       
      <Route path="/about" element={<> <Navbar/> <AboutUsPage/> <Footer/></>} />

      <Route path="/contact" element={<> <Navbar /> <ContactUsPage /> <Footer /></>} />
      <Route path="/testMonial" element={<> <Navbar /> <TestMonialPage/> <Footer /></>} />

       
      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      
      <Route path="/admin/dashboard"
        element={<> 
        <PrivateRoute path='/admin/dashboard'> 
        <AdminSidebar/>
          <Dashboard />          </PrivateRoute>

        </>}/>

        <Route path="/admin/product"
        element={<>        <PrivateRoute path='/admin/product'> 
        <AdminSidebar/>
          <ProductTablePage /> </PrivateRoute>

        </>}/>


      <Route path="/editproduct" element={
        <>
        <PrivateRoute path='/admin/editproduct'> 
      <AdminSidebar/>
      <EditProduct />          </PrivateRoute>

      </>}/>

      <Route path="/createproduct" element={<> 
        <PrivateRoute path='/admin/createproduct'>    
      <AdminSidebar/> <CreateProduct />          </PrivateRoute>
 </> }/>

    
      <Route path="/admin/order"
        element={<> 
         <PrivateRoute path='/admin/order'> 
        <AdminSidebar/>
          <OrderTable />
          </PrivateRoute>
        </>} />

        <Route path="/admin/orderd"
        element={<>
        <PrivateRoute path='/admin/orderd'>
        <AdminSidebar/>
        <OrderDetails/>
        </PrivateRoute>
        </>} />

      <Route path="/admin/contacttable"
        element={<> <PrivateRoute path='/admin/contacttable'>  <AdminSidebar/><ContactUsTable/> </PrivateRoute> </>} />


        <Route path="/admin/test"
        element={<> <PrivateRoute path='/admin/test'> <AdminSidebar/>
        <TestMonialTable/> </PrivateRoute> </>} />

      <Route path='/admin' element={<PrivateRoute path='/admin'> <Admin/> </PrivateRoute>} />

      <Route path='/user' element={<PrivateRoute path='/user'> 
       <Navbar/> <Shop/> <Footer/> </PrivateRoute>}
       />


      <Route path="/cart"
        element={<> <Navbar/> <Cart/> <Footer/></>}/>

      <Route path="/verify" element={<Verify/>} />

      <Route path="/profile" element={<ProfilePage ID={decoded}/>}/>

      <Route path='*' element={ <> <Navbar/> <Error/> <Footer/></>}/>

    </Routes>
  )

  return (
    <div>

      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </div>
  );
}

export default App;
