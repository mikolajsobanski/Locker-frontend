import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from "react-router-dom";
import CopyWrites from './components/CopyWrites'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import AccountSettingsScreen from './screens/AccountSettingsScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import WhatIamUsing from './screens/WhatIamUsingScreen';
import Upfooter from './components/Upfooter'
import SocialPanel from './components/SocialPanel';
import Navbar from './components/Navbar';
import FootballCategory from './screens/FootballCategory';
import BasketballCategoryScreen from './screens/BasketballCategoryScreen';
import AddProductScreen from './screens/AddProductScreen';
import StickyNavbar from './components/StickyNavbar';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    
      <Router>
        <Navbar />
        <StickyNavbar />
        
        <main>
         <ScrollToTop>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/add" element={<AddProductScreen />} />
            <Route path="/football" element={<FootballCategory />} />
            <Route path="/basketball" element={<BasketballCategoryScreen />} />
            <Route path="/settings" element={<AccountSettingsScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/thanksThem" element={<WhatIamUsing />} />
            <Route path="/product/:id/edit" element={<ProductEditScreen />}/>
          </Routes>
          </ScrollToTop>
        </main>
        
        <CopyWrites />
        <SocialPanel />
        <Upfooter />
        
      </Router>
      
  );
}
export default App;