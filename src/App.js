import React from 'react';
import Header from "./components/Header";
import Store from "./components/Store";
import {useCart} from './contexts/CartContext'
import axios from 'axios';
import { Routes,Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Cart from './components/Cart';

import GlobalStyle from './components/Globalstyle';

function App() {
  const items = useCart();

  const baseUrl =`https://my-json-server.typicode.com/ellsonmendesyt/shoppingcart/data`;
  const [loading,setLoading]=React.useState(false); 
  const [error,setError]=React.useState(false); 
  
  
  const [products,setProducts]= React.useState(null);





  React.useEffect(() => {
    setLoading(true);
    axios.get(`${baseUrl}`)
    .then((response) => {
    

      setProducts(response.data);
      
    })
    .catch(error=>{
      setError(error)

    })
    .finally(()=>{
      setLoading(false);
    })
  }, [])


  return (
    <>
     <BrowserRouter>
     <GlobalStyle/>
     <Header />
     <Routes>
       <Route path='/' element={ <Store items={products} />} />
       <Route path='/cart' element={<Cart />} />
     </Routes>
     
     </BrowserRouter>
    </>
  );
}

export default App;
