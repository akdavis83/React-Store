import React from 'react';
import Bible from '../Components/Bible';
import Prophecies from '../Components/Prophecies';
import ShoppingCart from '../Components/ShoppingCart';
import BibleImage from '../Assets/Bible3.jpg';
import PrivateRoute from '../Components/PrivateRoute';
// import PayPalButton from '../Components/PayPalButton';


const Home = () => {
  return (
    <>
    <PrivateRoute /> 
    <main className="home page">
     
      <div className="position-fixed">
        <div className="banner" style={{ height: '40vh', backgroundColor: '#f5f5f5' }}>
          <img className="banner-image img-fluid" src={BibleImage} alt='Bible' />

          <div className="position-absolute bottom-0 w-100 text-center text-white p-3">
            <h1>Welcome to my wonderful website where it is all about Jesus Christ the Messiah!</h1>
          </div> 
          
        </div>
          <ShoppingCart />
          {/* <PayPalButton  totalPrice={calculateTotalPrice()}/> */}
      </div>



      <div className="container mt-5">
          <Bible />
        <div className="row">
          <div className="col-12 col-lg-8">
         
          </div>

          <div className="col-12 col-lg-4">
            <div className="card">
              <div className="card-body">
                <Prophecies />
              </div>
            </div>
          </div>

          <div className="col-12 mt-4">
            
           
          </div>
        </div>
        
      </div>
      

      
      
    </main>
    </>
    
   
  );
};


export default Home;
